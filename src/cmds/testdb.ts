import Command from '../common/command'
import { DB,schemaTesting } from '../common/db'

export default class TestDB extends Command {

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
        console.log('args',this.arg);
        let db = new DB(); await db.load();
        await db.push('testing',{
            email: 'p@p.com',
            num:2,
            date: new Date()
        } as schemaTesting);
        await db.push('testing',{
            email: 'papu@pepe.com',
            num:5,
            date: new Date()
        } as schemaTesting);
        let get_table = db.get('testing');
        this.debug('full testing',get_table);
        //let get = await db.filter('testing',{ num:5 })[0].update({ num:4 });
        //this.debug('newUsers',get);
        //await db.save();
        let get_adv = await db.query(`SELECT FROM testing WHERE email LIKE '%papu%' ORDER BY num DESC`);
        this.debug('advanced search:',get_adv);
        get_adv[0]._update({ num:get_adv[0].num+1 });
        get_table = db.get('testing');
        this.debug('full table testing updated',get_table);
        await db.save();
        //await db.query(`UPDATE testing SET num=7 WHERE email LIKE '%papu%'`);
        //this.debug('full (after update) testing table:',get_table);
        this.log(`Command ended sucessfully`,'green');
    }

}