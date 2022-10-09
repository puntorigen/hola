import Command from '../common/command'
import { DB,profilesFields,templatesFields } from '../common/db'
import { LinkedIn,CountryType,LanguageType } from '../common/linkedin'

//sends message invitation to people in your network without
//previous conversations with you
interface String {
    replaceAll(input: string, output : string): any;
}

export default class Invite extends Command {

    async init() {
        //@todo read this values from a theme.json file
        this.setColorTokens({
            '*':'yellow',
            '#':'cyan',
            '@':'green',
            '!':'brightRed'
        });
        return true;
    }

    async process() {
        //console.log('args',this.arg);
        let db = new DB(); await db.load();
        let template_;
        if (!this.arg.template) {
            //ask what template to use
            let templates = db.table('templates').map((item)=>({
                title:item.name,
                value:item.name,
                description:'keywords: '+item.keywords
            }));
            template_ = await this.choose('Please choose a template:',templates);
        }
        let template:templatesFields = db.search('templates',{ name:template_ })[0].value;
        //search profiles with given 'template' and 'invited' status
        let profiles = db.search('profiles',{
            templateUsed: template_,
            status: 'invited'
        });
        this.log(`profiles dump`,'white',profiles);
        //login to linkedin
        const linkedin = new LinkedIn(this.arg.user,this.arg.pass);
        await linkedin.login();
        //search within my own network for template and filter to only those that match with 'profiles'
        breakout:
        for (let country of template.country) {
            const myFriends = await linkedin.createProfileSearch({keywords:template.keywords, country:country, language:LanguageType.English, distance:1 });
            const friends = await linkedin.searchPeople(myFriends, 100, template.exclude);
            //this.debug('friends',friends);
            //break;
            let invitations = 0;
            for (let person of friends) {
                let chats = await person.chat();
                if (chats.length==0) {
                    //only send message if there are no conversations between you and the person
                    //check if person is within the already invited profiles
                    let profiles = db.search('profiles',{
                        templateUsed: template_,
                        status: 'invited',
                        firstName: person.firstName,
                        lastName: person.lastName
                    });
                    //build template to invite friend (only if invited by BOT)
                    let message = template.invitation_message.toString();
                    Object.keys(person).map((item)=>{
                        message = message.split(`{${item}}`).join(person[item]);
                    });
                    if (profiles && profiles.length>0) {
                        this.log(`sending invitation to *${person.firstName}* ..`);
                        invitations += 1;
                        profiles[0]._update({
                            status: 'message_sent',
                            messageSent: true,
                            messageDate: new Date(),
                            distance: 1
                        } as profilesFields);
                        await person.sendMessage(message);
                        db.save();
                        this.log(`Message sent! to #${person.firstName} ${person.lastName}#:\n*${message}*`);
                        //console.log('person '+person.firstName+' '+person.lastName);
                    } else {
                        this.log(`${person.firstName} was not invited by the bot for template @${template_}@; so we won't text him!`,'brightRed');
                    }
                    if (invitations>=template.max_invite) break breakout;
                } else {
                    this.log(`${person.firstName} ${person.lastName} has messages with you, so we omit him.`,'green');
                }

            }
        }        
        this.log(`Command ended sucessfully`,'green');
    }

}