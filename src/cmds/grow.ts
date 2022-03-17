import Command from '../common/command'
import { DB,profilesFields } from '../common/db'
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
        const linkedin = new LinkedIn(this.arg.user,this.arg.pass);
        await linkedin.login();
        const newUsersProfile = await linkedin.createProfileSearch({keywords:'software engineer nodejs ts', country:CountryType.Chile, language:LanguageType.English, distance:2 });
        const newUsers = await linkedin.searchPeople(newUsersProfile, 10, 'CEO,founder,owner,recruiter');
        newUsers.map(async (person)=>{
            await db.add('profiles',{ 
                firstName:person.firstName, 
                lastName:person.lastName,
                sourceUserName:this.arg.user,
                templateUsed:this.arg.template,
                status:'invited',
                invitationSent: true,
                invitationDate: new Date(),
                messageSent: false,
                distance: 2,
                dateAdded: new Date()
            });
        });
        this.debug('newUsers',newUsers);
        this.log(`Command ended sucessfully`,'green');
    }

}