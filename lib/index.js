(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.hola = factory());
})(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }

    var root$1 = (require('find-root'))(__dirname);
    var pkg = require(root$1 + '/package.json');
    var fs = require('fs').promises;
    var helper = /** @class */ (function () {
        function helper() {
            this.x_console = new (require('@concepto/console'))();
        }
        helper.prototype.copyright = function () {
            this.x_console.out({
                message: "\nCrafted with passion @ 2022 by ".concat(pkg.author, "."),
                color: 'dim'
            });
        };
        helper.prototype.fileExists = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            resp = false;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, fs.access(file)];
                        case 2:
                            resp = _a.sent();
                            resp = true;
                            return [3 /*break*/, 4];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, resp];
                    }
                });
            });
        };
        helper.prototype.readFile = function (file, json) {
            if (json === void 0) { json = true; }
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fs.readFile(file, 'utf-8')];
                        case 1:
                            resp = _a.sent();
                            if (json)
                                return [2 /*return*/, JSON.parse(resp)];
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        helper.prototype.writeFile = function (file, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, fs.writeFile(file, data, 'utf-8', {
                                    encoding: 'utf8',
                                    flag: 'w'
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        helper.prototype.isObjEmpty = function (obj) {
            //fastest algorithm
            for (var x in obj)
                return false;
            return true;
        };
        return helper;
    }());

    var helper_$2 = new helper();
    var prompts$1 = require('prompts');
    var x_console = new (require('@concepto/console'))();
    require('dotenv').config();
    var ref = {};
    //@todo read this from a theme.json file
    x_console.setColorTokens({
        '*': 'yellow',
        '#': 'cyan',
        '@': 'green'
    });
    var finish = function (exitcode) {
        // closing script
        console.log('\n');
        helper_$2.copyright();
        if (exitcode)
            process.exit(exitcode);
        process.exit();
    };
    var command = function (desc, usage, signature) {
        if (signature === void 0) { signature = ''; }
        return function (target, key, descriptor) {
            var original = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var norm, _a, usage_1, option, aliases, short, main, ori, _b, _c, _d, req, other_, _e, _f, err_1, other_, _g, _h, _j, _k, _l, _m, _o, _p;
                    return __generator(this, function (_q) {
                        switch (_q.label) {
                            case 0:
                                //let usage = target[key+'_usage']();
                                if (!this.usage)
                                    this.usage = {};
                                if (!this.commands)
                                    this.commands = {};
                                if (!this.signatures)
                                    this.signatures = {};
                                this.usage[key] = usage; //declare it for CLI knowledge
                                this.commands[key] = desc; //declare it for CLI knowledge
                                this.usage[key + ':validation'] = {}; //declare it for CLI knowledge
                                ref[key] = {};
                                if (signature == '' && usage && usage.length > 0) {
                                    this.signatures[key] = '[options]'; //default value when there are options
                                }
                                else {
                                    this.signatures[key] = signature; //assigned given value
                                }
                                norm = args[0] //cmdline args
                                ;
                                (norm._) ? norm._[0] : "";
                                if (!!('_init' in norm)) return [3 /*break*/, 22];
                                norm._.shift(); // remove command name
                                for (_a = 0, usage_1 = usage; _a < usage_1.length; _a++) {
                                    option = usage_1[_a];
                                    aliases = option;
                                    short = option[0][1] //first char
                                    ;
                                    //console.log('deco '+key+' dump',{aliases,short,usage,option});
                                    if (short != '-') {
                                        aliases.shift(); // remove short from aliases
                                        main = aliases.shift().replace('--', '');
                                        aliases.shift(); // remove desc
                                        if (aliases.length > 0 && typeof aliases[0] === 'object') {
                                            ref[key][main] = aliases[0];
                                            //console.log('deco dump '+key+' usage',{ option, aliases });
                                            aliases.pop(); // remove validation
                                        }
                                        if (norm[short]) {
                                            norm[main] = norm[short]; // assign value to 'main' property name
                                            delete norm[short]; //erases short type
                                        }
                                        // assign all posible combinations to main from norm
                                        for (ori in norm) {
                                            if (ori != '_' && aliases.includes(ori)) {
                                                if (norm[ori]) {
                                                    norm[main] = norm[ori];
                                                    delete norm[ori];
                                                }
                                            }
                                        }
                                    }
                                }
                                _b = [];
                                for (_c in ref[key])
                                    _b.push(_c);
                                _d = 0;
                                _q.label = 1;
                            case 1:
                                if (!(_d < _b.length)) return [3 /*break*/, 21];
                                req = _b[_d];
                                if (!!(req in norm)) return [3 /*break*/, 20];
                                if (!(ref[key][req].error && ref[key][req].error != '')) return [3 /*break*/, 2];
                                //required file was not given and error message specified to halt process
                                if (ref[key][req].arg && norm[ref[key][req].arg]) {
                                    other_ = norm[ref[key][req].arg];
                                    if (ref[key][req].arg == '_') {
                                        if (other_.length > 0) {
                                            norm[req] = other_[0];
                                        }
                                        else {
                                            x_console.out({
                                                message: x_console.colorize(ref[key][req].error),
                                                color: 'brightRed'
                                            });
                                            finish(20);
                                        }
                                    }
                                    else {
                                        norm[req] = other_;
                                    }
                                }
                                else if (ref[key][req].arg) {
                                    x_console.out({
                                        message: x_console.colorize(ref[key][req].error),
                                        color: 'brightRed'
                                    });
                                    finish(20);
                                }
                                return [3 /*break*/, 20];
                            case 2:
                                if (!(ref[key][req].prompt && ref[key][req].prompt != '')) return [3 /*break*/, 8];
                                _q.label = 3;
                            case 3:
                                _q.trys.push([3, 6, , 7]);
                                if (!!norm[req]) return [3 /*break*/, 5];
                                _e = norm;
                                _f = req;
                                return [4 /*yield*/, prompts$1({
                                        type: (ref[key][req].type) ? ref[key][req].type : 'text',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].prompt)
                                    })];
                            case 4:
                                _e[_f] = (_q.sent()).value;
                                if (!norm[req] && ref[key][req].default && ref[key][req].default != '')
                                    norm[req] = ref[key][req].default;
                                _q.label = 5;
                            case 5: return [3 /*break*/, 7];
                            case 6:
                                err_1 = _q.sent();
                                x_console.out({ message: 'error prompt', data: err_1 });
                                return [3 /*break*/, 7];
                            case 7: return [3 /*break*/, 20];
                            case 8:
                                if (!(ref[key][req].required && ref[key][req].required != '')) return [3 /*break*/, 20];
                                if (!(ref[key][req].arg && norm[ref[key][req].arg])) return [3 /*break*/, 14];
                                other_ = norm[ref[key][req].arg];
                                if (!(ref[key][req].arg == '_')) return [3 /*break*/, 12];
                                if (!(other_.length > 0)) return [3 /*break*/, 9];
                                norm[req] = other_[0];
                                return [3 /*break*/, 11];
                            case 9:
                                _g = norm;
                                _h = req;
                                return [4 /*yield*/, prompts$1({
                                        type: (ref[key][req].type) ? ref[key][req].type : 'text',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].required)
                                    })];
                            case 10:
                                _g[_h] = (_q.sent()).value;
                                if (!norm[req])
                                    finish(20);
                                _q.label = 11;
                            case 11: return [3 /*break*/, 13];
                            case 12:
                                norm[req] = other_;
                                _q.label = 13;
                            case 13: return [3 /*break*/, 16];
                            case 14:
                                if (!ref[key][req].arg) return [3 /*break*/, 16];
                                _j = norm;
                                _k = req;
                                return [4 /*yield*/, prompts$1({
                                        type: (ref[key][req].type) ? ref[key][req].type : 'text',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].required)
                                    })];
                            case 15:
                                _j[_k] = (_q.sent()).value;
                                if (!norm[req])
                                    finish(20);
                                _q.label = 16;
                            case 16:
                                //test if ENV key is defined; if so assign it
                                if (ref[key][req].env && process.env[ref[key][req].env]) {
                                    norm[req] = process.env[ref[key][req].env];
                                }
                                if (!(!(req in norm) && !ref[key][req].options)) return [3 /*break*/, 18];
                                _l = norm;
                                _m = req;
                                return [4 /*yield*/, prompts$1({
                                        type: 'text',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].required)
                                    })];
                            case 17:
                                _l[_m] = (_q.sent()).value;
                                if (!norm[req])
                                    finish(20);
                                _q.label = 18;
                            case 18:
                                if (!(!(req in norm) && ref[key][req].options)) return [3 /*break*/, 20];
                                _o = norm;
                                _p = req;
                                return [4 /*yield*/, prompts$1({
                                        type: 'select',
                                        name: 'value',
                                        message: x_console.colorize(ref[key][req].required),
                                        choices: ref[key][req].options
                                    })];
                            case 19:
                                _o[_p] = (_q.sent()).value;
                                if (!norm[req])
                                    finish(20);
                                _q.label = 20;
                            case 20:
                                _d++;
                                return [3 /*break*/, 1];
                            case 21:
                                //console.log('new args',norm);
                                //console.log('');
                                //call original method (only if not from constructor initialization)
                                original.apply(this, [norm]);
                                _q.label = 22;
                            case 22: return [2 /*return*/];
                        }
                    });
                });
            };
        };
    };
    var cli = function (constructor) {
        constructor.prototype.usage = {};
        constructor.prototype.commands = {};
        for (var method in constructor.prototype) {
            if (!['usage', 'commands'].includes(method)) {
                constructor.prototype[method]({ _init: true });
            }
        }
    };

    var prompts = require('prompts');
    var helper_$1 = new helper();
    var Command = /** @class */ (function () {
        function Command(arg) {
            if (arg.silent) { // --silent
                this.x_console = new (require('@concepto/console'))({ silent: true });
            }
            else {
                this.x_console = new (require('@concepto/console'))();
            }
            if (arg.debug) {
                this.debug_ = true; // --debug
                this.x_console.out = this.x_console.outT;
            }
            this.arg = _assign(_assign({}, arg), { cmd_: '' }); //cmd_ is the 
            if (arg._ && arg._.length > 0)
                this.arg.cmd_ = arg._[0].toLowerCase();
            this.helper_ = helper_$1;
        }
        Command.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var a, b;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.init()];
                        case 1:
                            a = _a.sent();
                            if (a == false)
                                this.finish(1);
                            return [4 /*yield*/, this.process()];
                        case 2:
                            b = _a.sent();
                            if (b == false)
                                this.finish(2);
                            this.finish();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Command.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, true];
                });
            });
        };
        Command.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //this is for the command instance to overwrite
                    return [2 /*return*/, true];
                });
            });
        };
        Command.prototype.finish = function (exitcode) {
            // closing script
            console.log('\n');
            helper_$1.copyright();
            if (exitcode)
                process.exit(exitcode);
        };
        Command.prototype.ask = function (question, validation) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'value',
                                message: this.x_console.colorize(question),
                                validate: function (value) {
                                    if (validation)
                                        return validation(value);
                                    return true;
                                }
                            })];
                        case 1:
                            resp = (_a.sent()).value;
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        Command.prototype.choose = function (question, options, selected) {
            if (selected === void 0) { selected = 0; }
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'select',
                                name: 'value',
                                message: this.x_console.colorize(question),
                                choices: options,
                                initial: selected
                            })];
                        case 1:
                            resp = (_a.sent()).value;
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        Command.prototype.multipleChoice = function (question, options, max, hint) {
            if (max === void 0) { max = 0; }
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'multiselect',
                                name: 'value',
                                message: this.x_console.colorize(question),
                                choices: options,
                                max: max,
                                hint: (hint) ? hint : '- Space to select. Return to submit'
                            })];
                        case 1:
                            resp = (_a.sent()).value;
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        Command.prototype.logPrefix = function (prefix, color) {
            if (color === void 0) { color = 'yellow'; }
            var params = { prefix: prefix, color: color };
            this.x_console.setPrefix(params);
        };
        Command.prototype.log = function (message, color, data) {
            var params = { message: message };
            var test = message.toLowerCase();
            if (test.indexOf('error:') != -1 || test.indexOf('error:') != -1)
                params.color = 'brightRed';
            if (data)
                params.data = data;
            if (color)
                params.color = color;
            this.x_console.out(params);
        };
        Command.prototype.debug = function (message, data) {
            var params = { prefix: 'debug:' + this.x_console.config.prefix, message: message, color: 'dim' };
            var test = message.toLowerCase();
            if (test.indexOf('error:') != -1 || test.indexOf('error:') != -1)
                params.color = 'brightRed';
            if (data)
                params.data = data;
            this.x_console.out(params);
        };
        Command.prototype.title = function (title, color, borderColor) {
            var params = { title: title };
            if (color)
                params.titleColor = color;
            this.x_console.title(params);
        };
        Command.prototype.spinner = function (color) {
            var params = {};
            if (color)
                params.color = color;
            return this.x_console.spinner(params);
        };
        Command.prototype.setColorTokens = function (colorTokens) {
            this.x_console.setColorTokens(colorTokens);
        };
        return Command;
    }());

    require('node-async-exec');
    var _a = require('linkedin-private-api'), Client = _a.Client; _a.Language;
    var wait = function (seconds) { return new Promise(function (res) { return setTimeout(res, seconds * 1000); }); };
    require('fs').promises;
    var LinkedIn = /** @class */ (function () {
        function LinkedIn(user, pass) {
            this.user = user;
            this.pass = pass;
            this.client = new Client();
        }
        LinkedIn.prototype.login = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.login.userPass({
                                username: this.user,
                                password: this.pass
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        LinkedIn.prototype.createProfileSearch = function (_a) {
            var keywords = _a.keywords, _b = _a.country, country = _b === void 0 ? CountryType.Chile : _b, _c = _a.language, language = _c === void 0 ? LanguageType.English : _c, _d = _a.distance, distance = _d === void 0 ? 2 : _d;
            //createProfileSearch(keywords:String,country:CountryType=CountryType.Chile,language:LanguageType=LanguageType.English,distance?:1|2|3) {
            var networkMapping = { 1: 'F', 2: 'S', 3: 'O' };
            var defaults = { language: language, distance: (distance) ? networkMapping[distance] : networkMapping[2], country: country };
            var resp = this.client.search.searchPeople({
                keywords: keywords,
                filters: {
                    profileLanguage: [defaults.language],
                    geoUrn: defaults.country,
                    network: defaults.distance //conex 2do nivel (amigos de amigos)
                }
            });
            return resp;
        };
        LinkedIn.prototype.searchPeople = function (searchProfile, maxRecords, exclude) {
            if (maxRecords === void 0) { maxRecords = 10; }
            return __awaiter(this, void 0, void 0, function () {
                var resp, records, ready, _i, ready_1, person;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            resp = [];
                            _a.label = 1;
                        case 1: return [4 /*yield*/, searchProfile.scrollNext()];
                        case 2:
                            if (!((records = _a.sent()) && records.length)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.filter(records, exclude)];
                        case 3:
                            ready = _a.sent();
                            for (_i = 0, ready_1 = ready; _i < ready_1.length; _i++) {
                                person = ready_1[_i];
                                if (resp.length > maxRecords)
                                    return [3 /*break*/, 4];
                                resp.push(_assign(_assign({}, person), { foundDate: new Date() }));
                            }
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, resp];
                    }
                });
            });
        };
        LinkedIn.prototype.filter = function (profiles, exclude) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    resp = profiles.map(function (perfil) {
                        var resp = {
                            title: perfil.title.text,
                            headline: perfil.headline.text,
                            subline: perfil.subline.text,
                            firstName: perfil.profile.firstName,
                            lastName: perfil.profile.lastName,
                            id: perfil.publicIdentifier,
                            profileUrl: "https://www.linkedin.com/in/".concat(perfil.publicIdentifier, "/"),
                            invite: function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.client.invitation.sendInvitation({
                                                    profileId: perfil.profile.profileId,
                                                    trackingId: perfil.profile.trackingId
                                                })
                                                //x_console.outT({ message:'Invitation sent to '+perfil.publicIdentifier, color:'green' });
                                            ];
                                            case 1:
                                                _a.sent();
                                                //x_console.outT({ message:'Invitation sent to '+perfil.publicIdentifier, color:'green' });
                                                return [4 /*yield*/, wait(3)];
                                            case 2:
                                                //x_console.outT({ message:'Invitation sent to '+perfil.publicIdentifier, color:'green' });
                                                _a.sent(); //wait 3 seconds between each invitation sent
                                                return [2 /*return*/, true];
                                        }
                                    });
                                });
                            },
                            chat: function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var conversation;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.client.conversation.getConversations({
                                                    recipients: perfil.profile.profileId
                                                }).scrollNext()];
                                            case 1:
                                                conversation = _a.sent();
                                                //x_console.setPrefix({ prefix:'chat', color:'white' })
                                                //x_console.outT({ message:`${conversation.length} chat messages between ${perfil.publicIdentifier}`, color:'green' });
                                                return [4 /*yield*/, wait(3)];
                                            case 2:
                                                //x_console.setPrefix({ prefix:'chat', color:'white' })
                                                //x_console.outT({ message:`${conversation.length} chat messages between ${perfil.publicIdentifier}`, color:'green' });
                                                _a.sent();
                                                return [2 /*return*/, conversation];
                                        }
                                    });
                                });
                            },
                            sendMessage: function (message) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.client.message.sendMessage({
                                                    profileId: perfil.profile.profileId,
                                                    text: message
                                                })];
                                            case 1:
                                                _a.sent();
                                                //x_console.setPrefix({ prefix:'message', color:'cyan' })
                                                //x_console.outT({ message:`invitation message sent to ${perfil.publicIdentifier}`, color:'green' });
                                                return [4 /*yield*/, wait(5)];
                                            case 2:
                                                //x_console.setPrefix({ prefix:'message', color:'cyan' })
                                                //x_console.outT({ message:`invitation message sent to ${perfil.publicIdentifier}`, color:'green' });
                                                _a.sent(); //wait 5sec between sent messages
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }
                        };
                        return resp;
                    }).filter(function (perfil) {
                        //filtramos perfiles (elinamos ciertos cargos: CEO,recruiter,recruiting,project manager)
                        var excluded = exclude.split(',');
                        for (var _i = 0, excluded_1 = excluded; _i < excluded_1.length; _i++) {
                            var what = excluded_1[_i];
                            if (perfil.headline.toLowerCase().includes(what.toLowerCase()))
                                return false;
                        }
                        return true;
                    });
                    return [2 /*return*/, resp];
                });
            });
        };
        return LinkedIn;
    }());
    var CountryType;
    (function (CountryType) {
        CountryType[CountryType["Argentina"] = 100446943] = "Argentina";
        CountryType[CountryType["Chile"] = 104621616] = "Chile";
        CountryType[CountryType["Colombia"] = 100876405] = "Colombia";
        CountryType[CountryType["Mexico"] = 103323778] = "Mexico";
        CountryType[CountryType["Peru"] = 102927786] = "Peru";
        CountryType[CountryType["Rusia"] = 0] = "Rusia";
        CountryType[CountryType["Uruguay"] = 100867946] = "Uruguay";
        CountryType[CountryType["USA"] = 103644278] = "USA";
    })(CountryType || (CountryType = {}));
    var LanguageType;
    (function (LanguageType) {
        LanguageType["Afar"] = "aa";
        LanguageType["Abkhaz"] = "ab";
        LanguageType["Avestan"] = "ae";
        LanguageType["Afrikaans"] = "af";
        LanguageType["Akan"] = "ak";
        LanguageType["Amharic"] = "am";
        LanguageType["Aragonese"] = "an";
        LanguageType["Arabic"] = "ar";
        LanguageType["Assamese"] = "as";
        LanguageType["Avaric"] = "av";
        LanguageType["Aymara"] = "ay";
        LanguageType["Azerbaijani"] = "az";
        LanguageType["Bashkir"] = "ba";
        LanguageType["Belarusian"] = "be";
        LanguageType["Bulgarian"] = "bg";
        LanguageType["Bihari"] = "bh";
        LanguageType["Bislama"] = "bi";
        LanguageType["Bambara"] = "bm";
        LanguageType["Bengali"] = "bn";
        LanguageType["Tibetan Standard"] = "bo";
        LanguageType["Breton"] = "br";
        LanguageType["Bosnian"] = "bs";
        LanguageType["Catalan"] = "ca";
        LanguageType["Chechen"] = "ce";
        LanguageType["Chamorro"] = "ch";
        LanguageType["Corsican"] = "co";
        LanguageType["Cree"] = "cr";
        LanguageType["Czech"] = "cs";
        LanguageType["Old Church Slavonic"] = "cu";
        LanguageType["Chuvash"] = "cv";
        LanguageType["Welsh"] = "cy";
        LanguageType["Danish"] = "da";
        LanguageType["German"] = "de";
        LanguageType["Divehi"] = "dv";
        LanguageType["Dzongkha"] = "dz";
        LanguageType["Ewe"] = "ee";
        LanguageType["Greek"] = "el";
        LanguageType["English"] = "en";
        LanguageType["Esperanto"] = "eo";
        LanguageType["Spanish"] = "es";
        LanguageType["Estonian"] = "et";
        LanguageType["Basque"] = "eu";
        LanguageType["Persian"] = "fa";
        LanguageType["Fula"] = "ff";
        LanguageType["Finnish"] = "fi";
        LanguageType["Fijian"] = "fj";
        LanguageType["Faroese"] = "fo";
        LanguageType["French"] = "fr";
        LanguageType["Western Frisian"] = "fy";
        LanguageType["Irish"] = "ga";
        LanguageType["Scottish Gaelic"] = "gd";
        LanguageType["Galician"] = "gl";
        LanguageType["Guaran\u00ED"] = "gn";
        LanguageType["Gujarati"] = "gu";
        LanguageType["Manx"] = "gv";
        LanguageType["Hausa"] = "ha";
        LanguageType["Hebrew"] = "he";
        LanguageType["Hindi"] = "hi";
        LanguageType["Hiri Motu"] = "ho";
        LanguageType["Croatian"] = "hr";
        LanguageType["Haitian"] = "ht";
        LanguageType["Hungarian"] = "hu";
        LanguageType["Armenian"] = "hy";
        LanguageType["Herero"] = "hz";
        LanguageType["Interlingua"] = "ia";
        LanguageType["Indonesian"] = "id";
        LanguageType["Interlingue"] = "ie";
        LanguageType["Igbo"] = "ig";
        LanguageType["Nuosu"] = "ii";
        LanguageType["Inupiaq"] = "ik";
        LanguageType["Ido"] = "io";
        LanguageType["Icelandic"] = "is";
        LanguageType["Italian"] = "it";
        LanguageType["Inuktitut"] = "iu";
        LanguageType["Japanese"] = "ja";
        LanguageType["Javanese"] = "jv";
        LanguageType["Georgian"] = "ka";
        LanguageType["Kongo"] = "kg";
        LanguageType["Kikuyu"] = "ki";
        LanguageType["Kwanyama"] = "kj";
        LanguageType["Kazakh"] = "kk";
        LanguageType["Kalaallisut"] = "kl";
        LanguageType["Khmer"] = "km";
        LanguageType["Kannada"] = "kn";
        LanguageType["Korean"] = "ko";
        LanguageType["Kanuri"] = "kr";
        LanguageType["Kashmiri"] = "ks";
        LanguageType["Kurdish"] = "ku";
        LanguageType["Komi"] = "kv";
        LanguageType["Cornish"] = "kw";
        LanguageType["Kyrgyz"] = "ky";
        LanguageType["Latin"] = "la";
        LanguageType["Luxembourgish"] = "lb";
        LanguageType["Ganda"] = "lg";
        LanguageType["Limburgish"] = "li";
        LanguageType["Lingala"] = "ln";
        LanguageType["Lao"] = "lo";
        LanguageType["Lithuanian"] = "lt";
        LanguageType["Luba-Katanga"] = "lu";
        LanguageType["Latvian"] = "lv";
        LanguageType["Malagasy"] = "mg";
        LanguageType["Marshallese"] = "mh";
        LanguageType["M\u0101ori"] = "mi";
        LanguageType["Macedonian"] = "mk";
        LanguageType["Malayalam"] = "ml";
        LanguageType["Mongolian"] = "mn";
        LanguageType["Marathi"] = "mr";
        LanguageType["Malay"] = "ms";
        LanguageType["Maltese"] = "mt";
        LanguageType["Burmese"] = "my";
        LanguageType["Nauru"] = "na";
        LanguageType["Norwegian Bokm\u00E5l"] = "nb";
        LanguageType["Northern Ndebele"] = "nd";
        LanguageType["Nepali"] = "ne";
        LanguageType["Ndonga"] = "ng";
        LanguageType["Dutch"] = "nl";
        LanguageType["Norwegian Nynorsk"] = "nn";
        LanguageType["Norwegian"] = "no";
        LanguageType["Southern Ndebele"] = "nr";
        LanguageType["Navajo"] = "nv";
        LanguageType["Chichewa"] = "ny";
        LanguageType["Occitan"] = "oc";
        LanguageType["Ojibwe"] = "oj";
        LanguageType["Oromo"] = "om";
        LanguageType["Oriya"] = "or";
        LanguageType["Ossetian"] = "os";
        LanguageType["Panjabi"] = "pa";
        LanguageType["P\u0101li"] = "pi";
        LanguageType["Polish"] = "pl";
        LanguageType["Pashto"] = "ps";
        LanguageType["Portuguese"] = "pt";
        LanguageType["Quechua"] = "qu";
        LanguageType["Romansh"] = "rm";
        LanguageType["Kirundi"] = "rn";
        LanguageType["Romanian"] = "ro";
        LanguageType["Russian"] = "ru";
        LanguageType["Kinyarwanda"] = "rw";
        LanguageType["Sanskrit"] = "sa";
        LanguageType["Sardinian"] = "sc";
        LanguageType["Sindhi"] = "sd";
        LanguageType["Northern Sami"] = "se";
        LanguageType["Sango"] = "sg";
        LanguageType["Sinhala"] = "si";
        LanguageType["Slovak"] = "sk";
        LanguageType["Slovene"] = "sl";
        LanguageType["Samoan"] = "sm";
        LanguageType["Shona"] = "sn";
        LanguageType["Somali"] = "so";
        LanguageType["Albanian"] = "sq";
        LanguageType["Serbian"] = "sr";
        LanguageType["Swati"] = "ss";
        LanguageType["Southern Sotho"] = "st";
        LanguageType["Sundanese"] = "su";
        LanguageType["Swedish"] = "sv";
        LanguageType["Swahili"] = "sw";
        LanguageType["Tamil"] = "ta";
        LanguageType["Telugu"] = "te";
        LanguageType["Tajik"] = "tg";
        LanguageType["Thai"] = "th";
        LanguageType["Tigrinya"] = "ti";
        LanguageType["Turkmen"] = "tk";
        LanguageType["Tagalog"] = "tl";
        LanguageType["Tswana"] = "tn";
        LanguageType["Tonga"] = "to";
        LanguageType["Turkish"] = "tr";
        LanguageType["Tsonga"] = "ts";
        LanguageType["Tatar"] = "tt";
        LanguageType["Twi"] = "tw";
        LanguageType["Tahitian"] = "ty";
        LanguageType["Uyghur"] = "ug";
        LanguageType["Ukrainian"] = "uk";
        LanguageType["Urdu"] = "ur";
        LanguageType["Uzbek"] = "uz";
        LanguageType["Venda"] = "ve";
        LanguageType["Vietnamese"] = "vi";
        LanguageType["Volap\u00FCk"] = "vo";
        LanguageType["Walloon"] = "wa";
        LanguageType["Wolof"] = "wo";
        LanguageType["Xhosa"] = "xh";
        LanguageType["Yiddish"] = "yi";
        LanguageType["Yoruba"] = "yo";
        LanguageType["Zhuang"] = "za";
        LanguageType["Chinese"] = "zh";
        LanguageType["Zulu"] = "zu";
    })(LanguageType || (LanguageType = {}));

    /**
     * Class to manage a JSON file as the local DB
     * @name 	hola
     * @module 	db
     **/
    require('prompts');
    var query = require('alasql').promise;
    var path = require('path');
    var root = require('find-root')(__dirname);
    var helper_ = new helper();
    var DB = /** @class */ (function () {
        function DB() {
            this.data = { schema: {}, values: {} };
            this.x_console = new (require('@concepto/console'))();
        }
        DB.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.data.schema['testing'])
                                this.data.schema['testing'] = {
                                    email: '',
                                    num: 0,
                                    date: new Date()
                                };
                            if (!this.data.schema['templates'])
                                this.data.schema['templates'] = {
                                    name: '',
                                    keywords: '',
                                    exclude: '',
                                    country: [CountryType.Chile, CountryType.USA, CountryType.Argentina],
                                    exclude_people: '',
                                    max_grow: 5,
                                    max_invite: 5,
                                    invitation_message: ''
                                };
                            if (!this.data.schema['profiles'])
                                this.data.schema['profiles'] = {
                                    firstName: '',
                                    lastName: '',
                                    sourceUserName: '',
                                    templateUsed: '',
                                    status: ['invited', 'message_sent', 'answered'],
                                    invitationSent: false,
                                    invitationDate: new Date(),
                                    messageSent: false,
                                    messageDate: new Date(),
                                    distance: 2,
                                    dateAdded: new Date()
                                };
                            return [4 /*yield*/, this.save()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DB.prototype.load = function (file) {
            if (file === void 0) { file = path.join(root, 'db.json'); }
            return __awaiter(this, void 0, void 0, function () {
                var exists, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.file = file;
                            return [4 /*yield*/, helper_.fileExists(file)];
                        case 1:
                            exists = _b.sent();
                            if (!!exists) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.init()];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            _a = this;
                            return [4 /*yield*/, helper_.readFile(file)];
                        case 4:
                            _a.data = _b.sent();
                            _b.label = 5;
                        case 5: return [4 /*yield*/, this.init()];
                        case 6:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DB.prototype.save = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, helper_.writeFile(this.file, JSON.stringify(this.data))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DB.prototype.validateSchema = function (schema, data) {
            var schemaKeys = Object.keys(schema);
            for (var _i = 0, schemaKeys_1 = schemaKeys; _i < schemaKeys_1.length; _i++) {
                var key = schemaKeys_1[_i];
                if (data[key] && typeof schema[key] !== typeof data[key]) {
                    if (typeof schema[key] == 'object' && typeof data[key] == 'string') {
                        //test if value of data[key] is within 'object' schema || alternative option
                        if (schema[key].includes(data[key])) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else if (!data[key]) {
                    return false;
                }
            }
            return true;
        };
        DB.prototype.push = function (table, data) {
            return __awaiter(this, void 0, void 0, function () {
                var valid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(table in this.data.schema)) return [3 /*break*/, 2];
                            valid = this.validateSchema(this.data.schema[table], data);
                            if (!valid)
                                return [2 /*return*/, false];
                            if (!this.data.values[table])
                                this.data.values[table] = [];
                            this.data.values[table].push(data);
                            return [4 /*yield*/, this.save()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 2: 
                        //table doesn't exist
                        return [2 /*return*/, false];
                    }
                });
            });
        };
        DB.prototype.filter = function (table, filter) {
            var _this = this;
            //ex 'templates', filter:{ country:'Chile' }
            if (!this.data.values[table])
                return false;
            var resp = __spreadArray([], this.data.values[table], true);
            var filterKeys = Object.keys(filter);
            resp = resp.filter(function (item) {
                for (var _i = 0, filterKeys_1 = filterKeys; _i < filterKeys_1.length; _i++) {
                    var key = filterKeys_1[_i];
                    if (item[key] != filter[key])
                        return false;
                }
                return true;
            });
            //add update method to each result
            resp = resp.map(function (item) {
                return {
                    value: item,
                    update: function (data) {
                        _this.data.values[table].map(function (row, idx) {
                            if (row == item)
                                _this.data.values[table][idx] = _assign(_assign({}, _this.data.values[table][idx]), data);
                        });
                        return resp;
                    }
                };
            });
            return resp;
        };
        DB.prototype.get = function (table) {
            if (this.data.schema[table] && !this.data.values[table])
                return [];
            if (!this.data.values[table])
                return false;
            return this.data.values[table];
        };
        DB.prototype.query = function (sql) {
            return __awaiter(this, void 0, void 0, function () {
                var extractor, table, resp;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            extractor = require('extractjs')();
                            table = extractor(" FROM {table} ", sql).table;
                            sql = sql.replace(" FROM ".concat(table, " "), " FROM ? ");
                            return [4 /*yield*/, query(sql, [this.data.values[table]])];
                        case 1:
                            resp = _a.sent();
                            //add method _update to each result
                            resp = resp.map(function (row) {
                                return _assign(_assign({}, row), { _update: function (data) {
                                        _this.data.values[table].some(function (row2, idx) {
                                            if (row2 == row) {
                                                _this.data.values[table][idx] = _assign(_assign({}, _this.data.values[table][idx]), data);
                                                return true;
                                            }
                                        });
                                    } });
                            });
                            return [2 /*return*/, resp];
                    }
                });
            });
        };
        return DB;
    }());

    var Grow = /** @class */ (function (_super) {
        __extends(Grow, _super);
        function Grow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Grow.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green',
                        '!': 'brightRed'
                    });
                    //define defaults
                    //if (!this.arg.envid) this.arg.envid = 'master';
                    //if (!this.arg.source && this.arg._!='') this.arg.source = this.arg._;
                    return [2 /*return*/, true];
                });
            });
        };
        Grow.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var db, linkedin, newUsersProfile, newUsers;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            db = new DB();
                            return [4 /*yield*/, db.load()];
                        case 1:
                            _a.sent();
                            linkedin = new LinkedIn(this.arg.user, this.arg.pass);
                            return [4 /*yield*/, linkedin.login()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, linkedin.createProfileSearch({ keywords: 'software engineer nodejs ts', country: CountryType.Chile, language: LanguageType.English, distance: 2 })];
                        case 3:
                            newUsersProfile = _a.sent();
                            return [4 /*yield*/, linkedin.searchPeople(newUsersProfile, 10, 'CEO,founder,owner,recruiter')];
                        case 4:
                            newUsers = _a.sent();
                            newUsers.map(function (person) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, db.push('profiles', {
                                                firstName: person.firstName,
                                                lastName: person.lastName,
                                                sourceUserName: this.arg.user,
                                                templateUsed: this.arg.template,
                                                status: 'invited',
                                                invitationSent: true,
                                                invitationDate: new Date(),
                                                messageSent: false,
                                                distance: 2,
                                                dateAdded: new Date()
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            this.debug('newUsers', newUsers);
                            this.log("Command ended sucessfully", 'green');
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Grow;
    }(Command));

    function isNonNumericKey(key) {
      return key !== String(parseFloat(key));
    }
    function getOwnEnumerableNonNumericKeysES6(obj) {
      return Object.getOwnPropertyNames(obj).filter(function (key) {
        return obj.propertyIsEnumerable(key) && isNonNumericKey(key);
      });
    }
    function getOwnEnumerableNonNumericKeysES5(obj) {
      return Object.keys(obj).filter(isNonNumericKey);
    }
    function getOwnEnumerableNonNumericKeysES3(obj) {
      var result = [];

      for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj.propertyIsEnumerable(key) && isNonNumericKey(key)) {
          result.push(key);
        }
      }

      return result;
    }
    var getOwnEnumerableNonNumericKeys = Object.getOwnPropertyNames ? getOwnEnumerableNonNumericKeysES6 : Object.keys ? getOwnEnumerableNonNumericKeysES5 : getOwnEnumerableNonNumericKeysES3;

    var EnumWrapper = function () {
      function EnumWrapper(enumObj) {
        this.enumObj = enumObj;
        this.keysList = Object.freeze(getOwnEnumerableNonNumericKeys(enumObj));
        var length = this.keysList.length;
        var valuesList = new Array(length);
        var keysByValueMap = new Map();

        for (var index = 0; index < length; ++index) {
          var key = this.keysList[index];
          var value = enumObj[key];
          valuesList[index] = value;
          keysByValueMap.set(value, key);
          this[index] = Object.freeze([key, value]);
        }

        this.valuesList = Object.freeze(valuesList);
        this.keysByValueMap = keysByValueMap;
        this.size = this.length = length;
        Object.freeze(this);
      }

      EnumWrapper.prototype.toString = function () {
        return "[object EnumWrapper]";
      };

      EnumWrapper.prototype.keys = function () {
        var _a;

        var _this = this;

        var index = 0;
        return _a = {
          next: function next() {
            var isDone = index >= _this.length;
            var result = {
              done: isDone,
              value: _this.keysList[index]
            };
            ++index;
            return result;
          }
        }, _a[Symbol.iterator] = function () {
          return this;
        }, _a;
      };

      EnumWrapper.prototype.values = function () {
        var _a;

        var _this = this;

        var index = 0;
        return _a = {
          next: function next() {
            var isDone = index >= _this.length;
            var result = {
              done: isDone,
              value: _this.valuesList[index]
            };
            ++index;
            return result;
          }
        }, _a[Symbol.iterator] = function () {
          return this;
        }, _a;
      };

      EnumWrapper.prototype.entries = function () {
        var _a;

        var _this = this;

        var index = 0;
        return _a = {
          next: function next() {
            var isDone = index >= _this.length;
            var result = {
              done: isDone,
              value: _this[index]
            };
            ++index;
            return result;
          }
        }, _a[Symbol.iterator] = function () {
          return this;
        }, _a;
      };

      EnumWrapper.prototype[Symbol.iterator] = function () {
        return this.entries();
      };

      EnumWrapper.prototype.forEach = function (iteratee, context) {
        var length = this.length;

        for (var index = 0; index < length; ++index) {
          var entry = this[index];
          iteratee.call(context, entry[1], entry[0], this, index);
        }
      };

      EnumWrapper.prototype.map = function (iteratee, context) {
        var length = this.length;
        var result = new Array(length);

        for (var index = 0; index < length; ++index) {
          var entry = this[index];
          result[index] = iteratee.call(context, entry[1], entry[0], this, index);
        }

        return result;
      };

      EnumWrapper.prototype.getKeys = function () {
        return this.keysList.slice();
      };

      EnumWrapper.prototype.getValues = function () {
        return this.valuesList.slice();
      };

      EnumWrapper.prototype.getEntries = function () {
        return Array.prototype.slice.call(this);
      };

      EnumWrapper.prototype.indexOfKey = function (key) {
        return this.keysList.indexOf(key);
      };

      EnumWrapper.prototype.indexOfValue = function (value) {
        return this.valuesList.indexOf(value);
      };

      EnumWrapper.prototype.isKey = function (key) {
        return key != null && isNonNumericKey(key) && this.enumObj.hasOwnProperty(key);
      };

      EnumWrapper.prototype.asKeyOrThrow = function (key) {
        if (this.isKey(key)) {
          return key;
        } else {
          throw new Error("Unexpected key: " + key + ". Expected one of: " + this.getValues());
        }
      };

      EnumWrapper.prototype.asKeyOrDefault = function (key, defaultKey) {
        if (this.isKey(key)) {
          return key;
        } else {
          return defaultKey;
        }
      };

      EnumWrapper.prototype.isValue = function (value) {
        return value != null && this.keysByValueMap.has(value);
      };

      EnumWrapper.prototype.asValueOrThrow = function (value) {
        if (this.isValue(value)) {
          return value;
        } else {
          throw new Error("Unexpected value: " + value + ". Expected one of: " + this.getValues());
        }
      };

      EnumWrapper.prototype.asValueOrDefault = function (value, defaultValue) {
        if (this.isValue(value)) {
          return value;
        } else {
          return defaultValue;
        }
      };

      EnumWrapper.prototype.getKeyOrThrow = function (value) {
        var result = value != null ? this.keysByValueMap.get(value) : undefined;

        if (result != null) {
          return result;
        } else {
          throw new Error("Unexpected value: " + value + ". Expected one of: " + this.getValues());
        }
      };

      EnumWrapper.prototype.getKeyOrDefault = function (value, defaultKey) {
        var result = value != null ? this.keysByValueMap.get(value) : undefined;

        if (result != null) {
          return result;
        } else {
          return defaultKey;
        }
      };

      EnumWrapper.prototype.getValueOrThrow = function (key) {
        return this.enumObj[this.asKeyOrThrow(key)];
      };

      EnumWrapper.prototype.getValueOrDefault = function (key, defaultValue) {
        if (this.isKey(key)) {
          return this.enumObj[key];
        } else {
          return defaultValue;
        }
      };

      return EnumWrapper;
    }();
    EnumWrapper.prototype[Symbol.toStringTag] = "EnumWrapper";

    var unhandledEntry = Symbol("ts-enum-util:unhandledEntry");
    var handleNull = Symbol("ts-enum-util:handleNull");
    var handleUndefined = Symbol("ts-enum-util:handleUndefined");
    var handleUnexpected = Symbol("ts-enum-util:handleUnexpected");

    function createUnhandledEntryError(unhandledValue) {
      return new Error("Unhandled value: " + unhandledValue);
    }

    var EnumValueVisitee = function () {
      function EnumValueVisitee(value) {
        this.value = value;
      }

      EnumValueVisitee.prototype.with = function (visitor) {
        if (visitor.hasOwnProperty(this.value)) {
          var handler = visitor[this.value];
          return processEntry$1(handler, this.value);
        } else if (visitor[handleUnexpected]) {
          return processEntry$1(visitor[handleUnexpected], this.value);
        } else {
          throw new Error("Unexpected value: " + this.value);
        }
      };

      return EnumValueVisitee;
    }();

    var EnumValueVisiteeWithNull = function () {
      function EnumValueVisiteeWithNull() {}

      EnumValueVisiteeWithNull.prototype.with = function (visitor) {
        if (visitor[handleNull]) {
          return processEntry$1(visitor[handleNull], null);
        } else if (visitor[handleUnexpected]) {
          return processEntry$1(visitor[handleUnexpected], null);
        } else {
          throw new Error("Unexpected value: null");
        }
      };

      return EnumValueVisiteeWithNull;
    }();

    var EnumValueVisiteeWithUndefined = function () {
      function EnumValueVisiteeWithUndefined() {}

      EnumValueVisiteeWithUndefined.prototype.with = function (visitor) {
        if (visitor[handleUndefined]) {
          return processEntry$1(visitor[handleUndefined], undefined);
        } else if (visitor[handleUnexpected]) {
          return processEntry$1(visitor[handleUnexpected], undefined);
        } else {
          throw new Error("Unexpected value: undefined");
        }
      };

      return EnumValueVisiteeWithUndefined;
    }();

    function processEntry$1(entry, value) {
      if (entry === unhandledEntry) {
        throw createUnhandledEntryError(value);
      } else {
        return entry(value);
      }
    }

    var EnumValueMappee = function () {
      function EnumValueMappee(value) {
        this.value = value;
      }

      EnumValueMappee.prototype.with = function (mapper) {
        if (mapper.hasOwnProperty(this.value)) {
          return processEntry(mapper[this.value], this.value);
        } else if (mapper.hasOwnProperty(handleUnexpected)) {
          return processEntry(mapper[handleUnexpected], this.value);
        } else {
          throw new Error("Unexpected value: " + this.value);
        }
      };

      return EnumValueMappee;
    }();

    var EnumValueMappeeWithNull = function () {
      function EnumValueMappeeWithNull() {}

      EnumValueMappeeWithNull.prototype.with = function (mapper) {
        if (mapper.hasOwnProperty(handleNull)) {
          return processEntry(mapper[handleNull], null);
        } else if (mapper.hasOwnProperty(handleUnexpected)) {
          return processEntry(mapper[handleUnexpected], null);
        } else {
          throw new Error("Unexpected value: null");
        }
      };

      return EnumValueMappeeWithNull;
    }();

    var EnumValueMappeeWithUndefined = function () {
      function EnumValueMappeeWithUndefined() {}

      EnumValueMappeeWithUndefined.prototype.with = function (mapper) {
        if (mapper.hasOwnProperty(handleUndefined)) {
          return processEntry(mapper[handleUndefined], undefined);
        } else if (mapper.hasOwnProperty(handleUnexpected)) {
          return processEntry(mapper[handleUnexpected], undefined);
        } else {
          throw new Error("Unexpected value: undefined");
        }
      };

      return EnumValueMappeeWithUndefined;
    }();

    function processEntry(entry, value) {
      if (entry === unhandledEntry) {
        throw createUnhandledEntryError(value);
      } else {
        return entry;
      }
    }

    function visitEnumValue(value) {
      if (value === null) {
        return new EnumValueVisiteeWithNull();
      } else if (value === undefined) {
        return new EnumValueVisiteeWithUndefined();
      } else {
        return new EnumValueVisitee(value);
      }
    }

    function mapEnumValue(value) {
      if (value === null) {
        return new EnumValueMappeeWithNull();
      } else if (value === undefined) {
        return new EnumValueMappeeWithUndefined();
      } else {
        return new EnumValueMappee(value);
      }
    }

    var enumWrapperInstancesCache = new WeakMap();
    function $enum(enumObj) {
      var result = enumWrapperInstancesCache.get(enumObj);

      if (!result) {
        result = new EnumWrapper(enumObj);
        enumWrapperInstancesCache.set(enumObj, result);
      }

      return result;
    }
    $enum.handleNull = handleNull;
    $enum.handleUndefined = handleUndefined;
    $enum.handleUnexpected = handleUnexpected;
    $enum.unhandledEntry = unhandledEntry;
    $enum.visitValue = visitEnumValue;
    $enum.mapValue = mapEnumValue;

    var Templates = /** @class */ (function (_super) {
        __extends(Templates, _super);
        function Templates() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.action = 'list';
            return _this;
        }
        Templates.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green',
                        '!': 'brightRed'
                    });
                    //set defaults
                    if (this.arg._.length > 0)
                        this.action = this.arg._.shift();
                    return [2 /*return*/, true];
                });
            });
        };
        Templates.prototype.editor = function (text) {
            return new Promise(function (resolve, reject) {
                var editor = require('tiny-cli-editor');
                var message = editor(text);
                message.on('data', function (text_) {
                    resolve(text_);
                });
                message.on('abort', function (text_) {
                    reject(text_);
                });
                message.on('submit', function (text_) {
                    resolve(text_);
                });
            });
        };
        Templates.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var db, questions, templates, _a, _b, countries, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            db = new DB();
                            return [4 /*yield*/, db.load()];
                        case 1:
                            _g.sent();
                            questions = {};
                            return [4 /*yield*/, db.get('templates')];
                        case 2:
                            templates = _g.sent();
                            //choose action: arg._ ? list (default),create,delete
                            if (this.arg._.length > 0)
                                questions.name = this.arg._.shift();
                            if (!(this.action == 'list')) return [3 /*break*/, 3];
                            console.log('list templates', templates);
                            return [3 /*break*/, 11];
                        case 3:
                            if (!(this.action == 'create')) return [3 /*break*/, 11];
                            if (!!questions.name) return [3 /*break*/, 5];
                            _a = questions;
                            return [4 /*yield*/, this.ask("How do you plan to name this new template?")];
                        case 4:
                            _a.name = _g.sent();
                            _g.label = 5;
                        case 5:
                            _b = questions;
                            return [4 /*yield*/, this.ask("Enter the keywords for searching new members:")];
                        case 6:
                            _b.keywords = _g.sent();
                            countries = $enum(CountryType).map(function (value) { return ({ title: CountryType[value], value: value }); });
                            _c = questions;
                            return [4 /*yield*/, this.multipleChoice("What countries should the people be from?", countries, 3)];
                        case 7:
                            _c.country = _g.sent();
                            _d = questions;
                            return [4 /*yield*/, this.ask("List people to exclude (comma delimited):")];
                        case 8:
                            _d.exclude = _g.sent();
                            if (questions.exclude != '')
                                questions.exclude = questions.exclude.split(',');
                            _e = questions;
                            return [4 /*yield*/, this.ask("How many message templates do you wish to write now?", function (value) { return parseInt(value) == value; })];
                        case 9:
                            _e.numberLines = _g.sent();
                            if (questions.numberLines != '')
                                questions.numberMessages = parseInt(questions.numberLines);
                            _f = questions;
                            return [4 /*yield*/, this.editor("Hola {firstName},\nMi nombre es {myFirstname} y te invite porque me parecio interesante tu perfil para compartirlo con la empresa que trabajo.\nSolo piden que sepas ingles y tengas experiencia en NodeJS.")];
                        case 10:
                            _f.message = _g.sent();
                            //
                            this.debug('debug answers', questions);
                            _g.label = 11;
                        case 11: return [2 /*return*/];
                    }
                });
            });
        };
        return Templates;
    }(Command));

    //import Invite from './invite'
    var cmds = {
        Grow: Grow,
        Templates: Templates
        //testDB
    };

    require('dotenv').config();
    /**
     * cmds:
     * grow:    search and send friend requests on your behalf (aka grow your network)
     * invite:  search by the given template, within your existing network, those that matches and send them a chat message inviting them to a company
     * referr:  collect those of your network who are interested, grab their PDF resume and send it to the specified referrer (ex. austin)
     * analyze: analyze existing members of your network that match the given template (extract github,age (by pic),chat history,experience,etc.)
     */
    var hola = /** @class */ (function () {
        function hola(arg) {
        }
        /*@command(`Runs database tests`,[])
        async test(arg: any) {
            //test db
            await (new cmds.TestDB(arg)).run();
        }*/
        hola.prototype.templates = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        //manage templates: list, create, delete
                        return [4 /*yield*/, (new cmds.Templates(arg)).run()];
                        case 1:
                            //manage templates: list, create, delete
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        hola.prototype.grow = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        //console.log('usage dump',this.usage);
                        return [4 /*yield*/, (new cmds.Grow(arg)).run()];
                        case 1:
                            //console.log('usage dump',this.usage);
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            command("Manage locally saved templates for the BOT to use", [])
        ], hola.prototype, "templates", null);
        __decorate([
            command("Grows your LinkedIn network with the given template parameters", [
                ['-u', '--user', "Specify your LinkedIn email", {
                        required: "Please enter your #LinkedIn email#",
                        env: 'LINKEDIN_USER'
                    }],
                ['-p', '--pass', "Specify your LinkedIn password", {
                        required: 'Please enter your #LinkedIn password#:',
                        type: 'password',
                        env: 'LINKEDIN_PASS'
                    }],
                ['-t', '--template', "Template to use", {
                        required: 'Please select a template:',
                        options: [
                            { title: 'backend', value: 'backend', description: "Backend developer" },
                            { title: 'frontend', value: 'frontend', description: "Frontend developer" },
                            { title: 'fullstack', value: 'fullstack', description: "Fullstack developer" }
                        ]
                    }]
            ])
        ], hola.prototype, "grow", null);
        hola = __decorate([
            cli
        ], hola);
        return hola;
    }());

    return hola;

}));