import Command from '../common/command';
<<<<<<< HEAD
export default class TUI extends Command {
    menu: any;
    init(): Promise<boolean>;
    login(): Promise<any>;
    renderForm(parentScreen: any, form: any, config?: any): Promise<unknown>;
=======
export default class Tui extends Command {
    screen: any;
    init(): Promise<boolean>;
>>>>>>> e43760b7f33d8b96492c7b84d0636bfbac7f61c7
    process(): Promise<void>;
}
//# sourceMappingURL=tui.d.ts.map