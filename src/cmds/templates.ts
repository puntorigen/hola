import Command from '../common/command'
import { DB,schemaTesting } from '../common/db'
import { CountryType } from '../common/linkedin';
import { $enum } from 'ts-enum-util';

export default class Templates extends Command {
    action:string = 'list'

    async init() {
        //@todo read this values from a theme.json file
        this.setColorTokens({
            '*':'yellow',
            '#':'cyan',
            '@':'green',
            '!':'brightRed'
        });
        //set defaults
        if (this.arg._.length>0) this.action = this.arg._.shift();
        return true;
    }

    editor(text?:string) {
        return new Promise((resolve,reject)=>{
            const editor = require('tiny-cli-editor');
            let message = editor(text);
            message.on('data',(text_) => {
                console.log('data',text_);
                resolve(text_);
            })
            message.on('abort',(text_) => {
                console.log('abort',text_);
                reject(text_);
            })
            message.on('submit',(text_) => {
                console.log('submit',text_);
                resolve(text_);
            })
        });
    }

    async process() {
        let db = new DB(); await db.load();
        let questions:any = {};
        let templates = await db.get('templates');
        //choose action: arg._ ? list (default),create,delete
        if (this.arg._.length>0) questions.name = this.arg._.shift(); 
        if (this.action=='list') {
            console.log('list templates',templates);
        } else if (this.action=='create') {
            if (!questions.name) questions.name = await this.ask(`How do you plan to name this new template?`);
            questions.keywords = await this.ask(`Enter the keywords for searching new members:`);
            questions.keywords_exclude = await this.ask(`Enter the keywords that profiles shouldn't have:`);
            const countries = $enum(CountryType).map((value)=>({ title:CountryType[value], value }) );
            questions.countries = await this.multipleChoice(`What countries should the people be from?`, countries, 3);
            questions.exclude = await this.ask(`List people to exclude (comma delimited):`);
            if (questions.exclude!='') questions.exclude=questions.exclude.split(','); 
            questions.messageNow = await this.choose(`Do you want to add a message template now?`,[{ title:'Yes',value:true },{ title:'No',value:false }]);
            this.debug('You can use variables: {firstName}, {lastName}, {myFirstName}');
            questions.message = '';
            if (questions.messageNow) {
                questions.message = [];
                for (const x of new Array(100)) {
                    questions.message.push(await this.ask(`Line ${questions.message.length+1}:`));
                    if (questions.message.length>2) {
                        //if last 2 lines are empty, stop querying lines
                        if (questions.message[questions.message.length-1]=='' && questions.message[questions.message.length-2]=='') break;
                    }
                }
                questions.message = questions.message.filter(String).join('\n'); //(item)=>(item.trim()!='')
            }
            //add to DB
            let add = await db.push('templates',{ name:questions.name, 
                                        exclude:questions.keywords_exclude, //exclude keywords from profiles 
                                        country:questions.countries,
                                        exclude_people:questions.exclude,   //don't include this people
                                        max_grow:10,
                                        max_invite:30,
                                        invitation_message: questions.message
                                    });
            this.debug('added ',add);
            await db.save();
            //
            this.debug('debug answers',questions);
        }
        
    }

}