/**
 * Class to manage a JSON file as the local DB
 * @name 	hola
 * @module 	db
 **/
import { CountryType } from '../common/linkedin';
export interface schemaTesting {
    email: string;
    num: number;
    date: Date;
}
export interface schemaTemplates {
    name: string;
    exclude: string;
    country: CountryType[];
    exclude_people: string;
    max_grow?: number;
    max_invite?: number;
    invitation_message: string[] | string;
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
    validateSchema(schema: any, data: any): boolean;
    push(table: string, data: any): boolean;
    filter(table: string, filter: any): false | any[];
    get(table: string): any;
    query(sql: string): Promise<any>;
}
//# sourceMappingURL=db.d.ts.map