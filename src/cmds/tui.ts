import Command from '../common/command'
import { DB,schemaTesting } from '../common/db'
let blessed = require('blessed'), contrib = require('blessed-contrib');

export default class TUI extends Command {
    menu: any 

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

    async login() {
        let screen = blessed.screen({ smartCSR: true, title:'Linkedin Login' });
        screen.key('q', function () {
            this.destroy();
        });
        screen.render();
        return screen;
    }

    renderForm(parentScreen:any,form:any,config?:any) {
        //transform the given array obj into a blessed form
        let theForm = blessed.form({
            parent:parentScreen,
            width: '90%',
            left: 'center',
            keys: true,
            vi: true
        });
        let rowIndex=2;
        form.map((row)=>{
            rowIndex+=1;
            if (row.label) blessed.text({ parent:parentScreen, content:row.label, top:rowIndex, left:5 });
            if (row.type && row.type=='textbox') {
                blessed[row.type]({   
                    parent:theForm, 
                    name:row.name, 
                    content:(row.value)?row.value:'', top:rowIndex, left:5, 
                    height:3,
                    inputOnFocus: true,
                    border: {
                        type: 'line'
                    },
                    focus: {
                        fg: 'blue'
                    }
                });
                rowIndex+=3;
            } 
        });
        rowIndex+=1;
        let submit = blessed.button({
            parent:theForm,
            name:'submit',
            content:'Submit',
            top:rowIndex,
            left:5,
            shrink: true
        });
        submit.on('press', (x)=>theForm.submit());
        parentScreen.render();
        return new Promise((resolve,reject)=>{
            theForm.on('submit', (data)=>{
                console.log('data enviada',data);
                resolve(data);
            });
        });
    } 

    async process() {
        let login = await this.login();
        let form = [
           { label:'Linkedin Username:' },
           { type:'textbox', name:'username' },
           { label:'Linkedin Password:' },
           { type:'textbox', value:'password' }
        ];
        await this.renderForm(login,form);
    }

}