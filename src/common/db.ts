/**
 * Class to manage a JSON file as the local DB 
 * @name 	hola
 * @module 	db
 **/

import helper from './helper'
import { CountryType,LanguageType } from '../common/linkedin'
import { keys } from 'ts-transformer-keys';
const prompts = require('prompts');
const query = require('alasql').promise
const path = require('path');
const root = require('find-root')(__dirname)
const helper_ = new helper()

export interface schemaTesting {
    email: string,
    num:number,
    date:Date
}

export interface schemaTemplates {
    name: string,
    exclude: string,
    country: CountryType[],
    exclude_people: string[],
    max_grow?: number,
    max_invite?: number,
    invitation_message: string[] | string
}
export interface schemaProfiles {
    firstName: string,
    lastName: string,
    sourceUserName: string,
    templateUsed: string,
    status: 'invited'|'message_sent'|'answered',
    invitationSent: boolean,
    invitationDate?: Date,
    messageSent: false,
    messageDate?: Date,
    distance: number,
    dateAdded: Date
}

export class DB {
    x_console: any
    file: String
    db: any
    data: any = { schema:{}, values:{} }

    constructor() {
        this.x_console = new (require('@concepto/console'))()
    }
    
    async init() {
        if (!this.data.schema['testing']) {
            const keys_ = keys<schemaTesting>();
            console.log('initializing testing schema')
            this.data.values['testing'] = [];
            this.data.schema['testing'] = keys_;
        }
        if (!this.data.schema['templates']) {
            const keys_ = keys<schemaTemplates>();
            console.log('initializing templates schema')
            this.data.values['templates'] = [];
            this.data.schema['templates'] = keys_;
        }
        if (!this.data.schema['profiles']) {
            const keys_ = keys<schemaProfiles>();
            this.data.values['profiles'] = [];
            this.data.schema['profiles'] = keys_;
        }
        await this.save();
    }

    async load(file:string=path.join(root,'db.json')) {
        this.file = file;
        const exists = await helper_.fileExists(file);
        if (!exists) {
            await this.init();
        } else {
            this.data = await helper_.readFile(file);
            await this.init();
        }
    }

    async save() {
        await helper_.writeFile(this.file,JSON.stringify(this.data));
    }

    validateSchemaKeys(schema:any,data:any) {
        const dataKeys = Object.keys(data);
        for (let key of dataKeys) {
            if (!schema.includes(key)) return false;
        }
        return true;
    }

    push(table:string,data:any) {
        //get table schema
        if (table in this.data.schema) {
            //check that given data fields exist and are of the same type of schema
            const valid = this.validateSchemaKeys(this.data.schema[table],data);
            //console.log('valid data for table',{table,data,valid});
            if (!valid) return false;
            if (!this.data.values[table]) this.data.values[table]=[];
            this.data.values[table].push(data);
            return true;
        } else {
            //table doesn't exist
            return false;
        }
    }

    filter(table:string,filter:any) {
        //ex 'templates', filter:{ country:'Chile' }
        if (!this.data.values[table]) return false;
        let resp = [...this.data.values[table]];
        const filterKeys = Object.keys(filter);
        resp = resp.filter((item)=>{
            for (let key of filterKeys) {
                if (item[key]!=filter[key]) return false;
            }
            return true;
        });
        //add update method to each result
        resp = resp.map((item)=>{
            return {
                value:item,
                update: (data) => {
                    this.data.values[table].map((row,idx)=>{
                        if (row==item) this.data.values[table][idx] = {...this.data.values[table][idx],...data};
                    });
                    return resp;
                }
            }
        });
        return resp;
    }

    get(table:string) {
        if (this.data.schema[table] && !this.data.values[table]) return [];
        if (!this.data.values[table]) return false;
        return this.data.values[table];
    }
    
    async query(sql:string) {
        //query('SELECT * FROM templates WHERE country="Chile"');
        //-- ala doesn't support this query('UPDATE templates SET country="Argentina" WHERE country="Chile"');
        const extractor = require('extractjs')()
        let table = extractor(` FROM {table} `,sql).table;
        sql = sql.replace(` FROM ${table} `,` FROM ? `);
        let resp = await query(sql,[this.data.values[table]]);
        //add method _update to each result
        resp = resp.map((row)=>{
            return {...row,_update:(data)=>{
                this.data.values[table].some((row2,idx)=>{
                    if (row2==row) {
                        this.data.values[table][idx] = {...this.data.values[table][idx],...data};
                        return true;
                    }
                });
            }};
        });
        return resp;
    }
}