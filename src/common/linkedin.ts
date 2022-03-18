const shell = require('node-async-exec')
const { Client, Language } =  require('linkedin-private-api');
const wait = seconds => new Promise(res => setTimeout(res, seconds * 1000));
const fs = require('fs').promises;

export class LinkedIn {
    user: string
    pass: string
    client: any

    constructor(user: string, pass: string) {
        this.user = user
        this.pass = pass
        this.client = new Client();
    }

    async login() {
        await this.client.login.userPass({
            username: this.user,
            password: this.pass
        });
    }

    createProfileSearch({keywords,country=CountryType.Chile,language=LanguageType.English,distance=2 }:{ 
        keywords:string,
        country:CountryType,
        language:LanguageType,
        distance?:1|2|3
    }) {
    //createProfileSearch(keywords:String,country:CountryType=CountryType.Chile,language:LanguageType=LanguageType.English,distance?:1|2|3) {
        const networkMapping = {1:'F',2:'S',3:'O'};
        const defaults = { language, distance:(distance)?networkMapping[distance]:networkMapping[2], country };
        const resp = this.client.search.searchPeople({
            keywords: keywords,
            filters: {
                profileLanguage: [defaults.language],
                geoUrn: defaults.country,
                network: defaults.distance    //conex 2do nivel (amigos de amigos)
            }
        });
        return resp;
    }

    async searchPeople(searchProfile:any,maxRecords:number=10,exclude?:string) {
        let resp = [], records;
        maxReached:
        while ((records = await searchProfile.scrollNext()) && records.length) {
            const ready = await this.filter(records,exclude);
            for (const person of ready) {
                if (resp.length>maxRecords) break maxReached;
                resp.push({...person,...{ foundDate:new Date() }})
            }
        }
        return resp;
    }

    async filter(profiles,exclude:String) {
        let resp = profiles.map((perfil)=>{
            const resp = {
                title: perfil.title.text,
                headline: perfil.headline.text,
                subline: perfil.subline.text,
                firstName: perfil.profile.firstName,
                lastName: perfil.profile.lastName,
                id: perfil.publicIdentifier,
                profileUrl: `https://www.linkedin.com/in/${perfil.publicIdentifier}/`,
                invite: async function() {
                    await this.client.invitation.sendInvitation({
                        profileId: perfil.profile.profileId,
                        trackingId: perfil.profile.trackingId
                    })
                    //x_console.outT({ message:'Invitation sent to '+perfil.publicIdentifier, color:'green' });
                    await wait(3); //wait 3 seconds between each invitation sent
                    return true;
                }.bind(this),
                chat: async function() {
                    const conversation = await this.client.conversation.getConversations({
                        recipients: perfil.profile.profileId
                    }).scrollNext();
                    //x_console.setPrefix({ prefix:'chat', color:'white' })
                    //x_console.outT({ message:`${conversation.length} chat messages between ${perfil.publicIdentifier}`, color:'green' });
                    await wait(3);
                    return conversation;
                }.bind(this),
                sendMessage: async function(message) {
                    await this.client.message.sendMessage({
                        profileId: perfil.profile.profileId,
                        text: message
                    });
                    //x_console.setPrefix({ prefix:'message', color:'cyan' })
                    //x_console.outT({ message:`invitation message sent to ${perfil.publicIdentifier}`, color:'green' });
                    await wait(5); //wait 5sec between sent messages
                }.bind(this)
            };
            return resp;
        }).filter((perfil)=>{
            //filtramos perfiles (elinamos ciertos cargos: CEO,recruiter,recruiting,project manager)
            const excluded = exclude.split(',');
            for (const what of excluded) {
                if (perfil.headline.toLowerCase().includes(what.toLowerCase())) return false;
            }
            return true;
        });
        return resp;
    }
    /*
    async clone(repo: String, folder?: String) {
        const path = require('path')
        const just_repo = repo.split('/').pop()
        const new_path = path.join(this.path, folder ? folder : just_repo)
        try {
            await shell({
                cmd:
                    `git clone --depth 1 https://${this.user}@github.com/${repo}.git` +
                    (folder ? ' ' + folder : ''),
                path: this.path
            })
            //erase inner .git subdirectory
            await shell({ cmd: `rm -fr .git`, path: new_path })
        } catch (err_clone) {
            // clone repo or target folder already existing
        }
        //return path of new clone
        return new_path
    }*/
}

export enum CountryType {
    "Argentina"     =   100446943,
    "Chile"         =   104621616,
    "Colombia"      =   100876405,
    "Mexico"        =   103323778,
    "Peru"          =   102927786,
    "Rusia"          =   0,
    "Uruguay"       =   100867946,
    "USA"           =   103644278
}


export enum LanguageType {
    'Afar' = "aa",
    'Abkhaz' = "ab",
    'Avestan' = "ae",
    'Afrikaans' = "af",
    'Akan' = "ak",
    'Amharic' = "am",
    'Aragonese' = "an",
    'Arabic' = "ar",
    'Assamese' = "as",
    'Avaric' = "av",
    'Aymara' = "ay",
    'Azerbaijani' = "az",
    'Bashkir' = "ba",
    'Belarusian' = "be",
    'Bulgarian' = "bg",
    'Bihari' = "bh",
    'Bislama' = "bi",
    'Bambara' = "bm",
    'Bengali' = "bn",
    'Tibetan Standard' = "bo",
    'Breton' = "br",
    'Bosnian' = "bs",
    'Catalan' = "ca",
    'Chechen' = "ce",
    'Chamorro' = "ch",
    'Corsican' = "co",
    'Cree' = "cr",
    'Czech' = "cs",
    'Old Church Slavonic' = "cu",
    'Chuvash' = "cv",
    'Welsh' = "cy",
    'Danish' = "da",
    'German' = "de",
    'Divehi' = "dv",
    'Dzongkha' = "dz",
    'Ewe' = "ee",
    'Greek' = "el",
    'English' = "en",
    'Esperanto' = "eo",
    'Spanish' = "es",
    'Estonian' = "et",
    'Basque' = "eu",
    'Persian' = "fa",
    'Fula' = "ff",
    'Finnish' = "fi",
    'Fijian' = "fj",
    'Faroese' = "fo",
    'French' = "fr",
    'Western Frisian' = "fy",
    'Irish' = "ga",
    'Scottish Gaelic' = "gd",
    'Galician' = "gl",
    'Guaraní' = "gn",
    'Gujarati' = "gu",
    'Manx' = "gv",
    'Hausa' = "ha",
    'Hebrew' = "he",
    'Hindi' = "hi",
    'Hiri Motu' = "ho",
    'Croatian' = "hr",
    'Haitian' = "ht",
    'Hungarian' = "hu",
    'Armenian' = "hy",
    'Herero' = "hz",
    'Interlingua' = "ia",
    'Indonesian' = "id",
    'Interlingue' = "ie",
    'Igbo' = "ig",
    'Nuosu' = "ii",
    'Inupiaq' = "ik",
    'Ido' = "io",
    'Icelandic' = "is",
    'Italian' = "it",
    'Inuktitut' = "iu",
    'Japanese' = "ja",
    'Javanese' = "jv",
    'Georgian' = "ka",
    'Kongo' = "kg",
    'Kikuyu' = "ki",
    'Kwanyama' = "kj",
    'Kazakh' = "kk",
    'Kalaallisut' = "kl",
    'Khmer' = "km",
    'Kannada' = "kn",
    'Korean' = "ko",
    'Kanuri' = "kr",
    'Kashmiri' = "ks",
    'Kurdish' = "ku",
    'Komi' = "kv",
    'Cornish' = "kw",
    'Kyrgyz' = "ky",
    'Latin' = "la",
    'Luxembourgish' = "lb",
    'Ganda' = "lg",
    'Limburgish' = "li",
    'Lingala' = "ln",
    'Lao' = "lo",
    'Lithuanian' = "lt",
    'Luba-Katanga' = "lu",
    'Latvian' = "lv",
    'Malagasy' = "mg",
    'Marshallese' = "mh",
    'Māori' = "mi",
    'Macedonian' = "mk",
    'Malayalam' = "ml",
    'Mongolian' = "mn",
    'Marathi' = "mr",
    'Malay' = "ms",
    'Maltese' = "mt",
    'Burmese' = "my",
    'Nauru' = "na",
    'Norwegian Bokmål' = "nb",
    'Northern Ndebele' = "nd",
    'Nepali' = "ne",
    'Ndonga' = "ng",
    'Dutch' = "nl",
    'Norwegian Nynorsk' = "nn",
    'Norwegian' = "no",
    'Southern Ndebele' = "nr",
    'Navajo' = "nv",
    'Chichewa' = "ny",
    'Occitan' = "oc",
    'Ojibwe' = "oj",
    'Oromo' = "om",
    'Oriya' = "or",
    'Ossetian' = "os",
    'Panjabi' = "pa",
    'Pāli' = "pi",
    'Polish' = "pl",
    'Pashto' = "ps",
    'Portuguese' = "pt",
    'Quechua' = "qu",
    'Romansh' = "rm",
    'Kirundi' = "rn",
    'Romanian' = "ro",
    'Russian' = "ru",
    'Kinyarwanda' = "rw",
    'Sanskrit' = "sa",
    'Sardinian' = "sc",
    'Sindhi' = "sd",
    'Northern Sami' = "se",
    'Sango' = "sg",
    'Sinhala' = "si",
    'Slovak' = "sk",
    'Slovene' = "sl",
    'Samoan' = "sm",
    'Shona' = "sn",
    'Somali' = "so",
    'Albanian' = "sq",
    'Serbian' = "sr",
    'Swati' = "ss",
    'Southern Sotho' = "st",
    'Sundanese' = "su",
    'Swedish' = "sv",
    'Swahili' = "sw",
    'Tamil' = "ta",
    'Telugu' = "te",
    'Tajik' = "tg",
    'Thai' = "th",
    'Tigrinya' = "ti",
    'Turkmen' = "tk",
    'Tagalog' = "tl",
    'Tswana' = "tn",
    'Tonga' = "to",
    'Turkish' = "tr",
    'Tsonga' = "ts",
    'Tatar' = "tt",
    'Twi' = "tw",
    'Tahitian' = "ty",
    'Uyghur' = "ug",
    'Ukrainian' = "uk",
    'Urdu' = "ur",
    'Uzbek' = "uz",
    'Venda' = "ve",
    'Vietnamese' = "vi",
    'Volapük' = "vo",
    'Walloon' = "wa",
    'Wolof' = "wo",
    'Xhosa' = "xh",
    'Yiddish' = "yi",
    'Yoruba' = "yo",
    'Zhuang' = "za",
    'Chinese' = "zh",
    'Zulu' = "zu"
}