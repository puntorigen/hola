export declare class LinkedIn {
    user: string;
    pass: string;
    client: any;
    constructor(user: string, pass: string);
    login(): Promise<void>;
    createProfileSearch({ keywords, country, language, distance }: {
        keywords: string;
        country: CountryType;
        language: LanguageType;
        distance?: 1 | 2 | 3;
    }): any;
    searchPeople(searchProfile: any, maxRecords?: number, exclude?: string): Promise<any[]>;
    filter(profiles: any, exclude: String): Promise<any>;
}
export declare enum CountryType {
    "Argentina" = 100446943,
    "Chile" = 104621616,
    "Colombia" = 100876405,
    "Mexico" = 103323778,
    "Peru" = 102927786,
    "Rusia" = 0,
    "Uruguay" = 100867946,
    "USA" = 103644278
}
export declare enum LanguageType {
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
//# sourceMappingURL=linkedin.d.ts.map