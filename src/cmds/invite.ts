import Command from '../common/command'
import { LinkedIn,CountryType,LanguageType } from '../common/linkedin'

//sends message invitation to people in your network without
//previous conversations with you
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
        //const spinner = this.x_console.spinner({ color:'cyan' })
        const linkedin = new LinkedIn(this.arg.user,this.arg.pass);
        await linkedin.login();
        const newUsersProfile = await linkedin.createProfileSearch({keywords:'nodejs', country:CountryType.Chile, language:LanguageType.English, distance:2 });
        const newUsers = await linkedin.searchPeople(newUsersProfile, 10, 'CEO,founder,owner,recruiter');
        this.debug('newUsers',newUsers);
        this.log(`Command ended sucessfully`,'green');
    }

}