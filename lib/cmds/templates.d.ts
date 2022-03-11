import Command from '../common/command';
export default class Templates extends Command {
    action: string;
    init(): Promise<boolean>;
    editor(text?: string): Promise<unknown>;
    process(): Promise<void>;
}
//# sourceMappingURL=templates.d.ts.map