import { exit } from 'process';
import Command from '../common/command'
import { DB,profilesFields,templatesFields } from '../common/db'
import { LinkedIn,CountryType,LanguageType } from '../common/linkedin'

export default class Grow extends Command {

    async init() {
        //@todo read this values from a theme.json file
        this.setColorTokens({
            '*':'yellow',
            '#':'cyan',
            '@':'green',
            '!':'brightRed'
        });
        //define defaults
        //if (!this.arg.envid) this.arg.envid = 'master';
        //if (!this.arg.source && this.arg._!='') this.arg.source = this.arg._;
        return true;
    }

    async process() {
        //console.log('args',this.arg);
        //const spinner = this.x_console.spinner({ color:'cyan' })
        let db = new DB(); await db.load();
        //ask what template to use
        let templates = db.table('templates').map((item)=>({
            title:item.name,
            value:item.name,
            description:'keywords: '+item.keywords
        }));
        let template_ = await this.choose('Please choose a template:',templates);
        let template:templatesFields = db.search('templates',{ name:template_ })[0].value;
        const linkedin = new LinkedIn(this.arg.user,this.arg.pass);
        await linkedin.login();
        breakout:
        for (let country of template.country) {
            const newUsersProfile = await linkedin.createProfileSearch({keywords:template.keywords, country:country, language:LanguageType.English, distance:2 });
            const newUsers = await linkedin.searchPeople(newUsersProfile, 100, template.exclude);
            //this.debug('newUsers',newUsers);
            //break;
            let newPeople = 0;
            for (let person of newUsers) {
                console.log('person '+person.firstName+' '+person.lastName);
                let exists:any = db.search('profiles',{ firstName:person.firstName, lastName:person.lastName });
                exists = (exists && exists.length>0)?true:false;
                if (!exists) {
                    newPeople += 1;
                    let test = await db.add('profiles',{ 
                        firstName:person.firstName, 
                        lastName:person.lastName,
                        sourceUserName:this.arg.user,
                        templateUsed:template.name,
                        status:'invited',
                        invitationSent: true,
                        invitationDate: new Date(),
                        messageSent: false,
                        distance: 2,
                        dateAdded: new Date()
                    } as profilesFields);
                    await person.invite();
                    await db.save();
                    console.log('profile added',test);
                    if (newPeople>=template.max_grow) break breakout;
                } else {
                    console.log('profile was already invited');
                }
            }
        }        
        this.log(`Command ended sucessfully`,'green');
    }

}