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
                resolve(text_);
            })
            message.on('abort',(text_) => {
                reject(text_);
            })
            message.on('submit',(text_) => {
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
            const countries = $enum(CountryType).map((value)=>({ title:CountryType[value], value }) );
            questions.country = await this.multipleChoice(`What countries should the people be from?`, countries, 3);
            questions.exclude = await this.ask(`List people to exclude (comma delimited):`);
            if (questions.exclude!='') questions.exclude=questions.exclude.split(','); 
            questions.numberLines = await this.ask(`How many message templates do you wish to write now?`,(value)=>parseInt(value)==value);
            if (questions.numberLines!='') questions.numberMessages = parseInt(questions.numberLines);
            questions.message = await this.editor(`Hola {firstName},\nMi nombre es {myFirstname} y te invite porque me parecio interesante tu perfil para compartirlo con la empresa que trabajo.\nSolo piden que sepas ingles y tengas experiencia en NodeJS.`);
            //
            this.debug('debug answers',questions);
        }
        
    }

}