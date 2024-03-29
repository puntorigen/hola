/**
 * Class to manage a JSON file as the local DB
 * @name 	hola
 * @module 	db
 **/
import { CountryType } from '../common/linkedin';
export interface testingFields {
    email: string;
    num: number;
    date: Date;
}
export interface templatesFields {
    keywords: string;
    name: string;
    exclude: string;
    country: CountryType[];
    exclude_people: string[];
    max_grow?: number;
    max_invite?: number;
    invitation_message: string[] | string;
}
export interface profilesFields {
    firstName: string;
    lastName: string;
    sourceUserName: string;
    templateUsed: string;
    status: 'invited' | 'message_sent' | 'answered';
    invitationSent: boolean;
    invitationDate?: Date;
    messageSent: boolean;
    messageDate?: Date;
    distance: number;
    dateAdded: Date;
}
export declare class DB {
    x_console: any;
    file: String;
    db: any;
    data: any;
    constructor();
    init(): Promise<void>;
    load(file?: string): Promise<void>;
    save(): Promise<void>;
<<<<<<< HEAD
    validateSchema(schema: any, data: any): boolean;
    push(table: string, data: any): boolean;
    filter(table: string, filter: any): false | any[];
    get(table: string): any;
=======
    validateSchemaKeys(schema: any, data: any): boolean;
    add(table: string, data: testingFields | templatesFields | profilesFields): boolean;
    search(table: string, filter: any): false | any[];
    table(table: string): any;
>>>>>>> e43760b7f33d8b96492c7b84d0636bfbac7f61c7
    query(sql: string): Promise<any>;
}
//# sourceMappingURL=db.d.ts.map