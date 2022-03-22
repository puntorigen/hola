/**
 * Hola CLI: Personalized Recruiter Bot for searching, filtering and inviting targeted Linkedin profiles.
 * @name 	hola
 * @module 	hola
 **/
import { cli, command } from './common/decorators'
import cmds from './cmds'
require('dotenv').config()
/**
 * cmds:
 * grow:    search and send friend requests on your behalf (aka grow your network)
 * invite:  search by the given template, within your existing network, those that matches and send them a chat message inviting them to a company
 * referr:  collect those of your network who are interested, grab their PDF resume and send it to the specified referrer (ex. austin)
 * analyze: analyze existing members of your network that match the given template (extract github,age (by pic),chat history,experience,etc.)
 */

@cli
export default class hola {

    constructor(arg: { silent?: boolean } = { silent: true }) {}

    @command(`Runs database tests`,[])
    async test(arg: any) {
        //test db
        await (new cmds.TestDB(arg)).run();
    }

    @command(`Manage locally saved templates for the BOT to use`,[],'[create|list]')
    async templates(arg: any) {
        //manage templates: list, create, delete
        await (new cmds.Templates(arg)).run();
    }

    @command(`Backups the internal DB to the given JSON file`,[],'[file]\t')
    async backup(arg: any) {
        await (new cmds.Backup(arg)).run();
    }

    @command(`Restores the given JSON file to the internal DB`,[],'[file]\t')
    async restore(arg: any) {
        await (new cmds.Restore(arg)).run();
    }

    @command(
        `Grows your LinkedIn network with the given template parameters`,
        [
            ['-u','--user', `Specify your LinkedIn email`,{
                required:`Please enter your #LinkedIn email#`,
                env:'LINKEDIN_USER'
            }],
            ['-p', '--pass', `Specify your LinkedIn password`,{ 
                required:'Please enter your #LinkedIn password#:',
                type:'password',
                env:'LINKEDIN_PASS'
            }],
            ['-t', '--template', `Specify the template profile to use`]
        ],
        '[options]\t'
    )
    async grow(arg: any) {
        //console.log('usage dump',this.usage);
        await (new cmds.Grow(arg)).run();
    }

    @command(
        `Sends messages to your friends matching the given template`,
        [
            ['-u','--user', `Specify your LinkedIn email`,{
                required:`Please enter your #LinkedIn email#`,
                env:'LINKEDIN_USER'
            }],
            ['-p', '--pass', `Specify your LinkedIn password`,{ 
                required:'Please enter your #LinkedIn password#:',
                type:'password',
                env:'LINKEDIN_PASS'
            }],
            ['-t', '--template', `Specify the template profile to use`]
        ],
        '[options]'
    )
    async invite(arg: any) {
        //console.log('usage dump',this.usage);
        await (new cmds.Invite(arg)).run();
    }

    @command(
        `Opens a GUI like interface for managing the bot`,
        [
            ['-u','--user', `Specify your LinkedIn email`,{
                required:`Please enter your #LinkedIn email#`,
                env:'LINKEDIN_USER'
            }],
            ['-p', '--pass', `Specify your LinkedIn password`,{ 
                required:'Please enter your #LinkedIn password#:',
                type:'password',
                env:'LINKEDIN_PASS'
            }]
        ],
        '[options]\t'
    )
    async tui(arg: any) {
        //console.log('usage dump',this.usage);
        await (new cmds.Tui(arg)).run();
    }
}
