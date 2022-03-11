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

    /*@command(`Runs database tests`,[])
    async test(arg: any) {
        //test db
        await (new cmds.TestDB(arg)).run();
    }*/

    @command(`Manage locally saved templates for the BOT to use`,[])
    async templates(arg: any) {
        //manage templates: list, create, delete
        await (new cmds.Templates(arg)).run();
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
            ['-t', '--template', `Template to use`,{ 
                required:'Please select a template:',
                options: [
                    {   title:'backend', value:'backend', description:`Backend developer` },
                    {   title:'frontend', value:'frontend', description:`Frontend developer` },
                    {   title:'fullstack', value:'fullstack', description:`Fullstack developer` }
                ]
            }]
        ]
    )
    async grow(arg: any) {
        //console.log('usage dump',this.usage);
        await (new cmds.Grow(arg)).run();
    }

    /*

    @command(
        'Processes the given YML file with definitions',
        [
            ['-f','--file', `Specify the YML file to test`,{
                error:`Error! Required file argument was not specified`,
                arg:'_'
            }],
            [
                '-nd',
                '--nodeploy',
                `Generate new repo and contentful json without deploying it`
            ],
            ['-st', '--spacetoken', `Specify the Contentful API TOKEN`,{ 
                required:'Please enter the *Contentful API Token*:',
                env:'CONTENTFUL_API'
            }],
            ['-g', '--git-user', `Specify the Github username`,{
                required:`Please enter your #truepill's# *github username*`,
                env:'GITHUB_USER'
            }]
        ],
        '<file> [options]'
    )
    async process(arg: any) {
        await (new cmds.Process(arg)).run();
    }

    @command('Creates a new Telehealth project', [
        [
            '-n', '--name', `Specifies the new project's name`,{
                required:`What's the new project's name:`,
                arg: '_'
            }
        ],
        [
            '-s', '--source', 'Specifies the source repo (telehealth,telehealth-lite)',{
                required:`Choose the repo to use as source:`,
                options: [
                    {   title:'telehealth', value:'telehealth', description:`Example: yourrelief.com` },
                    {   title:'telehealth-lite', value:'telehealth-lite', description:`Example: findcovidcare.com` }
                ]
            }
        ],
        ['-g', '--git-user', `Specify the Github username`,{
            required:`Please enter your #truepill's# *github username*`,
            env:'GITHUB_USER'
        }],        
        [   '-id', '--spaceid', `Specifies the new contentful space-id`,{
                required: `Please specify the new contentful space-id:`
        }]
    ],'<name> [options]\t')
    async create(arg: any) {
        await (new cmds.Create(arg)).run();
    }

    @command('Clones a given Contentful space into a new one', [
        [   '-s',   '--source',     'Contentful source space'],
        [   '-n',   '--name',       `Defines the new space id`,{ required:`What's the name for *new space*:` }],
        [   '-se',  '--envid',      'Source enviroment Id to use'], //,{ prompt:`What enviroment Id do you wish to use (default:master):`, default:'master' }
        [   '-st',  '--spacetoken', `Specify the Contentful API TOKEN`,{ required:'Please enter the *Contentful API Token*:', env:'CONTENTFUL_API' }],
    ],'<source> [options]')
    async clone(arg: any) {
        await (new cmds.Clone(arg)).run();
    }*/
}
