import Command from '../common/command'
import { LinkedIn,CountryType,LanguageType } from '../common/linkedin'
let blessed = require('blessed'), contrib = require('blessed-contrib');


//opens TUI interface for handling the bot
export default class Tui extends Command {
    screen:any

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
        //const linkedin = new LinkedIn(this.arg.user,this.arg.pass);
        //await linkedin.login();
        //
        let screen = blessed.screen()
        screen.title = `Hola LinkedIn BOT`;
        //escape,q,CTRL-c
        screen.key(['escape', 'q', 'C-c'], function(ch, key) {
            process.exit();
        });
        let box = blessed.box({
            top: 'center',
            left: 'center',
            width: '50%',
            height: '50%',
            content: 'Hello {bold}world{/bold}!',
            tags: true,
            border: {
              type: 'line'
            },
            style: {
              fg: 'white',
              bg: 'magenta',
              border: {
                fg: '#f0f0f0'
              },
              hover: {
                bg: 'green'
              }
            }
          });
        screen.append(box);
        screen.render();

    }

}