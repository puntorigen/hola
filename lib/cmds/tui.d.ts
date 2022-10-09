import Command from '../common/command';
export default class TUI extends Command {
    menu: any;
    init(): Promise<boolean>;
    login(): Promise<any>;
    renderForm(parentScreen: any, form: any, config?: any): Promise<unknown>;
    process(): Promise<void>;
}
//# sourceMappingURL=tui.d.ts.map