import helper from '../common/helper'
import Command from '../common/command'

//copies the given json file to the internal DB location
export default class Restore extends Command {

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
        let file = '';
        if (this.arg._.length==0) file = await this.ask(`Please enter the backup DB filename to import:`);
        if (this.arg._.length>0) file = this.arg._.shift();
        const path = require('path');
        const root = require('find-root')(__dirname)
        const target = path.join(root,'db.json')
        const source = path.join(process.cwd(),file);
        const helper_ = new helper();
        let checkSource;
        try {
           checkSource = await helper_.readFile(source);
        } catch(ee) {
            this.log(`The given file @${file}@ doesn't exist!`,'brightRed');
            this.finish(10);
        }
        let ourDB = await helper_.readFile(target);
        if (checkSource.schema && Object.keys(checkSource.schema).length>0 &&
            checkSource.values && Object.keys(checkSource.values).length>0) {
            const fs = require('fs').promises;
            await fs.copyFile(source,target);
            this.log('DB restored successfully!','green')
        } else {
            this.log(`The given file doesn't seem to be a valid 'hola' DB JSON`,'brightRed');
        }
    }

}