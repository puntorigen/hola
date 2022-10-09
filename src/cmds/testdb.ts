import Command from '../common/command'
import { DB,testingFields } from '../common/db'

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
        let test1 = await db.add('testing',{    email: 'p@p.com',
                                                num:2,
                                                date: new Date()
                                            });
        console.log('test1',test1);
        let test2 = await db.add('testing',{    email: 'papu@pepe.com',
                                                num:5,
                                                date: new Date()
                                            });
        console.log('test2',test2);
        let get_table = db.table('testing');
        this.debug('full testing',get_table);
        //let get = await db.search('testing',{ num:5 })[0]._update({ num:4 });
        //this.debug('newUsers',get);
        //await db.save();
        let get_adv = await db.query(`SELECT FROM testing WHERE email LIKE '%papu%' ORDER BY num DESC`);
        this.debug('advanced search:',get_adv);
        get_adv[0]._update({ num:get_adv[0].num+1 });
        get_table = db.table('testing');
        this.debug('full table testing updated',get_table);
        await db.save();
        //await db.query(`UPDATE testing SET num=7 WHERE email LIKE '%papu%'`);
        //this.debug('full (after update) testing table:',get_table);
        this.log(`Command ended sucessfully`,'green');
    }

}