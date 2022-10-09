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
                                        type: (ref[key][req].type) ? ref[key][req].type : 'text',
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
        Command.prototype.multi = function (question, options, max, hint) {
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
            params.message = this.x_console.colorize(params.message);
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
    //add table keys below for new tables
    var tables = {
        testing: ["email", "num", "date"],
        templates: ["keywords", "name", "exclude", "country", "exclude_people", "max_grow", "max_invite", "invitation_message"],
        profiles: ["firstName", "lastName", "sourceUserName", "templateUsed", "status", "invitationSent", "invitationDate", "messageSent", "messageDate", "distance", "dateAdded"],
    };
    var DB = /** @class */ (function () {
        function DB() {
            this.data = { schema: {}, values: {} };
            this.x_console = new (require('@concepto/console'))();
        }
        DB.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Object.keys(tables).map(function (table) {
                                _this.data.schema[table] = tables[table];
                                if (!_this.data.values[table]) {
                                    _this.data.values[table] = [];
                                }
                            });
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
                            return [3 /*break*/, 6];
                        case 3:
                            _a = this;
                            return [4 /*yield*/, helper_.readFile(file)];
                        case 4:
                            _a.data = _b.sent();
                            return [4 /*yield*/, this.init()];
                        case 5:
                            _b.sent();
                            _b.label = 6;
                        case 6: return [2 /*return*/];
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
        DB.prototype.validateSchemaKeys = function (schema, data) {
            var dataKeys = Object.keys(data);
            for (var _i = 0, dataKeys_1 = dataKeys; _i < dataKeys_1.length; _i++) {
                var key = dataKeys_1[_i];
                if (!schema.includes(key)) {
                    return false;
                }
            }
            return true;
        };
        DB.prototype.add = function (table, data) {
            //get table schema
            if (table in this.data.schema) {
                //check that given data fields exist and are of the same type of schema
                var valid = this.validateSchemaKeys(this.data.schema[table], data);
                //console.log('valid data for table',{table,data,valid});
                if (!valid)
                    return false;
                if (!this.data.values[table])
                    this.data.values[table] = [];
                this.data.values[table].push(data);
                return true;
            }
            else {
                //table doesn't exist
                console.log('table ' + table + ', doesnt exist');
                return false;
            }
        };
        DB.prototype.search = function (table, filter) {
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
                    _update: function (data) {
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
        DB.prototype.table = function (table) {
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
                var _this = this;
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
                            }.bind(_this),
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
                            }.bind(_this),
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
                            }.bind(_this)
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
                var db, template_, templates, template, linkedin, _i, _a, country, newUsersProfile, newUsers, newPeople, _b, newUsers_1, person, exists, test;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            db = new DB();
                            return [4 /*yield*/, db.load()];
                        case 1:
                            _c.sent();
                            if (!!this.arg.template) return [3 /*break*/, 3];
                            templates = db.table('templates').map(function (item) { return ({
                                title: item.name,
                                value: item.name,
                                description: 'keywords: ' + item.keywords
                            }); });
                            return [4 /*yield*/, this.choose('Please choose a template:', templates)];
                        case 2:
                            template_ = _c.sent();
                            _c.label = 3;
                        case 3:
                            template = db.search('templates', { name: template_ })[0].value;
                            linkedin = new LinkedIn(this.arg.user, this.arg.pass);
                            return [4 /*yield*/, linkedin.login()];
                        case 4:
                            _c.sent();
                            _i = 0, _a = template.country;
                            _c.label = 5;
                        case 5:
                            if (!(_i < _a.length)) return [3 /*break*/, 15];
                            country = _a[_i];
                            return [4 /*yield*/, linkedin.createProfileSearch({ keywords: template.keywords, country: country, language: LanguageType.English, distance: 2 })];
                        case 6:
<<<<<<< HEAD
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
            //get table schema
            if (table in this.data.schema) {
                //check that given data fields exist and are of the same type of schema
                var valid = this.validateSchema(this.data.schema[table], data);
                if (!valid)
                    return false;
                if (!this.data.values[table])
                    this.data.values[table] = [];
                this.data.values[table].push(data);
                return true;
            }
            else {
                //table doesn't exist
                return false;
            }
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
=======
                            newUsersProfile = _c.sent();
                            return [4 /*yield*/, linkedin.searchPeople(newUsersProfile, 100, template.exclude)];
                        case 7:
                            newUsers = _c.sent();
                            newPeople = 0;
                            _b = 0, newUsers_1 = newUsers;
                            _c.label = 8;
                        case 8:
                            if (!(_b < newUsers_1.length)) return [3 /*break*/, 14];
                            person = newUsers_1[_b];
                            console.log('person ' + person.firstName + ' ' + person.lastName);
                            exists = db.search('profiles', { firstName: person.firstName, lastName: person.lastName });
                            exists = (exists && exists.length > 0) ? true : false;
                            if (!!exists) return [3 /*break*/, 12];
                            newPeople += 1;
                            return [4 /*yield*/, db.add('profiles', {
                                    firstName: person.firstName,
                                    lastName: person.lastName,
                                    sourceUserName: this.arg.user,
                                    templateUsed: template.name,
                                    status: 'invited',
                                    invitationSent: true,
                                    invitationDate: new Date(),
                                    messageSent: false,
                                    distance: 2,
                                    dateAdded: new Date()
                                })];
                        case 9:
                            test = _c.sent();
                            return [4 /*yield*/, person.invite()];
                        case 10:
                            _c.sent();
                            return [4 /*yield*/, db.save()];
                        case 11:
                            _c.sent();
                            console.log('profile added', test);
                            if (newPeople >= template.max_grow)
                                return [3 /*break*/, 15];
                            return [3 /*break*/, 13];
                        case 12:
                            console.log('profile was already invited');
                            _c.label = 13;
                        case 13:
                            _b++;
                            return [3 /*break*/, 8];
                        case 14:
                            _i++;
                            return [3 /*break*/, 5];
                        case 15:
>>>>>>> e43760b7f33d8b96492c7b84d0636bfbac7f61c7
                            this.log("Command ended sucessfully", 'green');
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Grow;
    }(Command));

    var blessed = require('blessed'); require('blessed-contrib');
    var TUI = /** @class */ (function (_super) {
        __extends(TUI, _super);
        function TUI() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TUI.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green',
                        '!': 'brightRed'
                    });
                    return [2 /*return*/, true];
                });
            });
        };
        TUI.prototype.login = function () {
            return __awaiter(this, void 0, void 0, function () {
                var screen;
                return __generator(this, function (_a) {
                    screen = blessed.screen({ smartCSR: true, title: 'Linkedin Login' });
                    screen.key('q', function () {
                        this.destroy();
                    });
                    screen.render();
                    return [2 /*return*/, screen];
                });
            });
        };
        TUI.prototype.renderForm = function (parentScreen, form, config) {
            //transform the given array obj into a blessed form
            var theForm = blessed.form({
                parent: parentScreen,
                width: '90%',
                left: 'center',
                keys: true,
                vi: true
            });
            var rowIndex = 2;
            form.map(function (row) {
                rowIndex += 1;
                if (row.label)
                    blessed.text({ parent: parentScreen, content: row.label, top: rowIndex, left: 5 });
                if (row.type && row.type == 'textbox') {
                    blessed[row.type]({
                        parent: theForm,
                        name: row.name,
                        content: (row.value) ? row.value : '', top: rowIndex, left: 5,
                        height: 3,
                        inputOnFocus: true,
                        border: {
                            type: 'line'
                        },
                        focus: {
                            fg: 'blue'
                        }
                    });
                    rowIndex += 3;
                }
            });
            rowIndex += 1;
            var submit = blessed.button({
                parent: theForm,
                name: 'submit',
                content: 'Submit',
                top: rowIndex,
                left: 5,
                shrink: true
            });
            submit.on('press', function (x) { return theForm.submit(); });
            parentScreen.render();
            return new Promise(function (resolve, reject) {
                theForm.on('submit', function (data) {
                    console.log('data enviada', data);
                    resolve(data);
                });
            });
        };
        TUI.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var login, form;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.login()];
                        case 1:
                            login = _a.sent();
                            form = [
                                { label: 'Linkedin Username:' },
                                { type: 'textbox', name: 'username' },
                                { label: 'Linkedin Password:' },
                                { type: 'textbox', value: 'password' }
                            ];
                            return [4 /*yield*/, this.renderForm(login, form)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return TUI;
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
                    console.log('data', text_);
                    resolve(text_);
                });
                message.on('abort', function (text_) {
                    console.log('abort', text_);
                    reject(text_);
                });
                message.on('submit', function (text_) {
                    console.log('submit', text_);
                    resolve(text_);
                });
            });
        };
        Templates.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var db, questions, templates, _a, _b, _c, countries, _d, _e, _f, _i, _g, _h, _j, add;
                return __generator(this, function (_k) {
                    switch (_k.label) {
                        case 0:
                            db = new DB();
                            return [4 /*yield*/, db.load()];
                        case 1:
                            _k.sent();
                            questions = {};
                            return [4 /*yield*/, db.table('templates')];
                        case 2:
                            templates = _k.sent();
                            //choose action: arg._ ? list (default),create,delete
                            if (this.arg._.length > 0)
                                questions.name = this.arg._.shift();
                            if (!(this.action == 'list')) return [3 /*break*/, 3];
                            console.log('list templates', templates);
                            return [3 /*break*/, 17];
                        case 3:
                            if (!(this.action == 'create')) return [3 /*break*/, 17];
                            if (!!questions.name) return [3 /*break*/, 5];
                            _a = questions;
                            return [4 /*yield*/, this.ask("How do you plan to name this new template?")];
                        case 4:
                            _a.name = _k.sent();
                            _k.label = 5;
                        case 5:
                            _b = questions;
                            return [4 /*yield*/, this.ask("Enter the keywords for searching new members:")];
                        case 6:
                            _b.keywords = _k.sent();
                            _c = questions;
                            return [4 /*yield*/, this.ask("Enter the keywords that profiles shouldn't have:")];
                        case 7:
                            _c.exclude = _k.sent();
                            countries = $enum(CountryType).map(function (value) { return ({ title: CountryType[value], value: value }); });
                            _d = questions;
                            return [4 /*yield*/, this.multi("What countries should the people be from?", countries, 3)];
                        case 8:
                            _d.country = _k.sent();
                            _e = questions;
                            return [4 /*yield*/, this.ask("List people to exclude (comma delimited):")];
                        case 9:
                            _e.exclude_people = _k.sent();
                            if (questions.exclude_people != '')
                                questions.exclude_people = questions.exclude_people.split(',');
                            _f = questions;
                            return [4 /*yield*/, this.choose("Do you want to add a message template now?", [{ title: 'Yes', value: true }, { title: 'No', value: false }])];
                        case 10:
                            _f.messageNow = _k.sent();
                            this.debug('You can use variables: {firstName}, {lastName}, {myFirstName}');
                            questions.invitation_message = '';
                            if (!questions.messageNow) return [3 /*break*/, 15];
                            questions.message = [];
                            _i = 0, _g = new Array(100);
                            _k.label = 11;
                        case 11:
                            if (!(_i < _g.length)) return [3 /*break*/, 14];
                            _j = (_h = questions.message).push;
                            return [4 /*yield*/, this.ask("Line ".concat(questions.message.length + 1, ":"))];
                        case 12:
                            _j.apply(_h, [_k.sent()]);
                            if (questions.message.length > 2) {
                                //if last 2 lines are empty, stop querying lines
                                if (questions.message[questions.message.length - 1] == '' && questions.message[questions.message.length - 2] == '')
                                    return [3 /*break*/, 14];
                            }
                            _k.label = 13;
                        case 13:
                            _i++;
                            return [3 /*break*/, 11];
                        case 14:
                            questions.invitation_message = questions.message.filter(String).join('\n'); //(item)=>(item.trim()!='')
                            _k.label = 15;
                        case 15:
<<<<<<< HEAD
                            add = db.push('templates', { name: questions.name,
                                exclude: questions.keywords_exclude,
                                country: questions.countries,
                                exclude_people: questions.exclude,
                                max_grow: 10,
                                max_invite: 30,
                                invitation_message: questions.message
=======
                            add = db.add('templates', { name: questions.name,
                                keywords: questions.keywords,
                                exclude: questions.exclude,
                                country: questions.country,
                                exclude_people: questions.exclude_people,
                                max_grow: 10,
                                max_invite: 30,
                                invitation_message: questions.invitation_message
>>>>>>> e43760b7f33d8b96492c7b84d0636bfbac7f61c7
                            });
                            this.debug('added ', add);
                            return [4 /*yield*/, db.save()];
                        case 16:
                            _k.sent();
                            //
                            this.debug('debug answers', questions);
                            _k.label = 17;
                        case 17: return [2 /*return*/];
                    }
                });
            });
        };
        return Templates;
    }(Command));

    var Invite = /** @class */ (function (_super) {
        __extends(Invite, _super);
        function Invite() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Invite.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green',
                        '!': 'brightRed'
                    });
                    return [2 /*return*/, true];
                });
            });
        };
        Invite.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var db, template_, templates, template, profiles, linkedin, _i, _a, country, myFriends, friends, invitations, _loop_1, this_1, _b, friends_1, person, state_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            db = new DB();
                            return [4 /*yield*/, db.load()];
                        case 1:
                            _c.sent();
                            if (!!this.arg.template) return [3 /*break*/, 3];
                            templates = db.table('templates').map(function (item) { return ({
                                title: item.name,
                                value: item.name,
                                description: 'keywords: ' + item.keywords
                            }); });
                            return [4 /*yield*/, this.choose('Please choose a template:', templates)];
                        case 2:
                            template_ = _c.sent();
                            _c.label = 3;
                        case 3:
                            template = db.search('templates', { name: template_ })[0].value;
                            profiles = db.search('profiles', {
                                templateUsed: template_,
                                status: 'invited'
                            });
                            this.log("profiles dump", 'white', profiles);
                            linkedin = new LinkedIn(this.arg.user, this.arg.pass);
                            return [4 /*yield*/, linkedin.login()];
                        case 4:
                            _c.sent();
                            _i = 0, _a = template.country;
                            _c.label = 5;
                        case 5:
                            if (!(_i < _a.length)) return [3 /*break*/, 12];
                            country = _a[_i];
                            return [4 /*yield*/, linkedin.createProfileSearch({ keywords: template.keywords, country: country, language: LanguageType.English, distance: 1 })];
                        case 6:
                            myFriends = _c.sent();
                            return [4 /*yield*/, linkedin.searchPeople(myFriends, 100, template.exclude)];
                        case 7:
                            friends = _c.sent();
                            invitations = 0;
                            _loop_1 = function (person) {
                                var chats, profiles_1, message_1;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0: return [4 /*yield*/, person.chat()];
                                        case 1:
                                            chats = _d.sent();
                                            if (!(chats.length == 0)) return [3 /*break*/, 5];
                                            profiles_1 = db.search('profiles', {
                                                templateUsed: template_,
                                                status: 'invited',
                                                firstName: person.firstName,
                                                lastName: person.lastName
                                            });
                                            message_1 = template.invitation_message.toString();
                                            Object.keys(person).map(function (item) {
                                                message_1 = message_1.split("{".concat(item, "}")).join(person[item]);
                                            });
                                            if (!(profiles_1 && profiles_1.length > 0)) return [3 /*break*/, 3];
                                            this_1.log("sending invitation to *".concat(person.firstName, "* .."));
                                            invitations += 1;
                                            profiles_1[0]._update({
                                                status: 'message_sent',
                                                messageSent: true,
                                                messageDate: new Date(),
                                                distance: 1
                                            });
                                            return [4 /*yield*/, person.sendMessage(message_1)];
                                        case 2:
                                            _d.sent();
                                            db.save();
                                            this_1.log("Message sent! to #".concat(person.firstName, " ").concat(person.lastName, "#:\n*").concat(message_1, "*"));
                                            return [3 /*break*/, 4];
                                        case 3:
                                            this_1.log("".concat(person.firstName, " was not invited by the bot for template @").concat(template_, "@; so we won't text him!"), 'brightRed');
                                            _d.label = 4;
                                        case 4:
                                            if (invitations >= template.max_invite)
                                                return [2 /*return*/, "break-breakout"];
                                            return [3 /*break*/, 6];
                                        case 5:
                                            this_1.log("".concat(person.firstName, " ").concat(person.lastName, " has messages with you, so we omit him."), 'green');
                                            _d.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _b = 0, friends_1 = friends;
                            _c.label = 8;
                        case 8:
                            if (!(_b < friends_1.length)) return [3 /*break*/, 11];
                            person = friends_1[_b];
                            return [5 /*yield**/, _loop_1(person)];
                        case 9:
                            state_1 = _c.sent();
                            switch (state_1) {
                                case "break-breakout": return [3 /*break*/, 12];
                            }
                            _c.label = 10;
                        case 10:
                            _b++;
                            return [3 /*break*/, 8];
                        case 11:
                            _i++;
                            return [3 /*break*/, 5];
                        case 12:
                            this.log("Command ended sucessfully", 'green');
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Invite;
    }(Command));

    //backups the internal DB to the given JSON file
    var Backup = /** @class */ (function (_super) {
        __extends(Backup, _super);
        function Backup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Backup.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green',
                        '!': 'brightRed'
                    });
                    return [2 /*return*/, true];
                });
            });
        };
        Backup.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var file, root, path, source, target, fs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            file = '';
                            if (!(this.arg._.length == 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.ask("Please enter the filename for the DB backup:")];
                        case 1:
                            file = _a.sent();
                            _a.label = 2;
                        case 2:
                            if (this.arg._.length > 0)
                                file = this.arg._.shift();
                            root = require('find-root')(__dirname);
                            path = require('path');
                            source = path.join(root, 'db.json');
                            target = path.join(process.cwd(), file);
                            fs = require('fs').promises;
                            return [4 /*yield*/, fs.copyFile(source, target)];
                        case 3:
                            _a.sent();
                            this.log('DB backup written successfully!', 'green');
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Backup;
    }(Command));

    //copies the given json file to the internal DB location
    var Restore = /** @class */ (function (_super) {
        __extends(Restore, _super);
        function Restore() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Restore.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green',
                        '!': 'brightRed'
                    });
                    return [2 /*return*/, true];
                });
            });
        };
        Restore.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var file, path, root, target, source, helper_, checkSource, fs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            file = '';
                            if (!(this.arg._.length == 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.ask("Please enter the backup DB filename to import:")];
                        case 1:
                            file = _a.sent();
                            _a.label = 2;
                        case 2:
                            if (this.arg._.length > 0)
                                file = this.arg._.shift();
                            path = require('path');
                            root = require('find-root')(__dirname);
                            target = path.join(root, 'db.json');
                            source = path.join(process.cwd(), file);
                            helper_ = new helper();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, helper_.readFile(source)];
                        case 4:
                            checkSource = _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            _a.sent();
                            this.log("The given file @".concat(file, "@ doesn't exist!"), 'brightRed');
                            this.finish(10);
                            return [3 /*break*/, 6];
                        case 6: return [4 /*yield*/, helper_.readFile(target)];
                        case 7:
                            _a.sent();
                            if (!(checkSource.schema && Object.keys(checkSource.schema).length > 0 &&
                                checkSource.values && Object.keys(checkSource.values).length > 0)) return [3 /*break*/, 9];
                            fs = require('fs').promises;
                            return [4 /*yield*/, fs.copyFile(source, target)];
                        case 8:
                            _a.sent();
                            this.log('DB restored successfully!', 'green');
                            return [3 /*break*/, 10];
                        case 9:
                            this.log("The given file doesn't seem to be a valid 'hola' DB JSON", 'brightRed');
                            _a.label = 10;
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        return Restore;
    }(Command));

    var blessed = require('blessed'); require('blessed-contrib');
    //opens TUI interface for handling the bot
    var Tui = /** @class */ (function (_super) {
        __extends(Tui, _super);
        function Tui() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tui.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green',
                        '!': 'brightRed'
                    });
                    return [2 /*return*/, true];
                });
            });
        };
        Tui.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var screen, box;
                return __generator(this, function (_a) {
                    screen = blessed.screen();
                    screen.title = "Hola LinkedIn BOT";
                    //escape,q,CTRL-c
                    screen.key(['escape', 'q', 'C-c'], function (ch, key) {
                        process.exit();
                    });
                    box = blessed.box({
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
                    return [2 /*return*/];
                });
            });
        };
        return Tui;
    }(Command));

    var TestDB = /** @class */ (function (_super) {
        __extends(TestDB, _super);
        function TestDB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TestDB.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    //@todo read this values from a theme.json file
                    this.setColorTokens({
                        '*': 'yellow',
                        '#': 'cyan',
                        '@': 'green',
                        '!': 'brightRed'
                    });
                    return [2 /*return*/, true];
                });
            });
        };
        TestDB.prototype.process = function () {
            return __awaiter(this, void 0, void 0, function () {
                var db, test1, test2, get_table, get_adv;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('args', this.arg);
                            db = new DB();
                            return [4 /*yield*/, db.load()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, db.add('testing', { email: 'p@p.com',
                                    num: 2,
                                    date: new Date()
                                })];
                        case 2:
                            test1 = _a.sent();
                            console.log('test1', test1);
                            return [4 /*yield*/, db.add('testing', { email: 'papu@pepe.com',
                                    num: 5,
                                    date: new Date()
                                })];
                        case 3:
                            test2 = _a.sent();
                            console.log('test2', test2);
                            get_table = db.table('testing');
                            this.debug('full testing', get_table);
                            return [4 /*yield*/, db.query("SELECT FROM testing WHERE email LIKE '%papu%' ORDER BY num DESC")];
                        case 4:
                            get_adv = _a.sent();
                            this.debug('advanced search:', get_adv);
                            get_adv[0]._update({ num: get_adv[0].num + 1 });
                            get_table = db.table('testing');
                            this.debug('full table testing updated', get_table);
                            return [4 /*yield*/, db.save()];
                        case 5:
                            _a.sent();
                            //await db.query(`UPDATE testing SET num=7 WHERE email LIKE '%papu%'`);
                            //this.debug('full (after update) testing table:',get_table);
                            this.log("Command ended sucessfully", 'green');
                            return [2 /*return*/];
                    }
                });
            });
        };
        return TestDB;
    }(Command));

    var cmds = {
        Grow: Grow,
<<<<<<< HEAD
        TUI: TUI,
        Templates: Templates
        //testDB
=======
        Templates: Templates,
        Invite: Invite,
        Backup: Backup,
        Restore: Restore,
        Tui: Tui,
        TestDB: TestDB
>>>>>>> e43760b7f33d8b96492c7b84d0636bfbac7f61c7
    };

    require('dotenv').config();
    /**
     * cmds:
     * grow:    search and send friend requests on your behalf (aka grow your network)
     * invite:  search by the given template within your existing network those that matches, and send them a chat message inviting them to a company
     * referr:  collect those of your network who are interested, grab their english PDF resume and send it to the specified referrer (ex. austin)
     * analyze: analyze existing members of your network that match the given template (extract github,age (by pic),chat history,experience,etc.)
     * tui:     terminal user interface, to manage bots and stats
     */
    var hola = /** @class */ (function () {
        function hola(arg) {
        }
        /*
        @command(`Runs database tests`,[])
        async test(arg: any) {
            //test db
            await (new cmds.TestDB(arg)).run();
        }*/
        hola.prototype.tui = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        //manage templates: list, create, delete
                        return [4 /*yield*/, (new cmds.TUI(arg)).run()];
                        case 1:
                            //manage templates: list, create, delete
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
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
        hola.prototype.backup = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (new cmds.Backup(arg)).run()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        hola.prototype.restore = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (new cmds.Restore(arg)).run()];
                        case 1:
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
        hola.prototype.invite = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        //console.log('usage dump',this.usage);
                        return [4 /*yield*/, (new cmds.Invite(arg)).run()];
                        case 1:
                            //console.log('usage dump',this.usage);
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        hola.prototype.tui = function (arg) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        //console.log('usage dump',this.usage);
                        return [4 /*yield*/, (new cmds.Tui(arg)).run()];
                        case 1:
                            //console.log('usage dump',this.usage);
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
<<<<<<< HEAD
            command("Open interactive terminal user interface", [], '')
        ], hola.prototype, "tui", null);
        __decorate([
            command("Manage locally saved templates for the BOT to use", [], '')
=======
            command("Manage locally saved templates for the BOT to use", [], '[create|list]')
>>>>>>> e43760b7f33d8b96492c7b84d0636bfbac7f61c7
        ], hola.prototype, "templates", null);
        __decorate([
            command("Backups the internal DB to the given JSON file", [], '[file]\t')
        ], hola.prototype, "backup", null);
        __decorate([
            command("Restores the given JSON file to the internal DB", [], '[file]\t')
        ], hola.prototype, "restore", null);
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
<<<<<<< HEAD
                ['-t', '--template', "Template to use", {
                        required: 'Please select a template:',
                        options: [
                            { title: 'backend', value: 'backend', description: "Backend developer" },
                            { title: 'frontend', value: 'frontend', description: "Frontend developer" },
                            { title: 'fullstack', value: 'fullstack', description: "Fullstack developer" }
                        ]
                    }]
            ], '[options]\t\t')
=======
                ['-t', '--template', "Specify the template profile to use"]
            ], '[options]\t')
>>>>>>> e43760b7f33d8b96492c7b84d0636bfbac7f61c7
        ], hola.prototype, "grow", null);
        __decorate([
            command("Sends messages to your friends matching the given template", [
                ['-u', '--user', "Specify your LinkedIn email", {
                        required: "Please enter your #LinkedIn email#",
                        env: 'LINKEDIN_USER'
                    }],
                ['-p', '--pass', "Specify your LinkedIn password", {
                        required: 'Please enter your #LinkedIn password#:',
                        type: 'password',
                        env: 'LINKEDIN_PASS'
                    }],
                ['-t', '--template', "Specify the template profile to use"]
            ], '[options]')
        ], hola.prototype, "invite", null);
        __decorate([
            command("Opens a GUI like interface for managing the bot", [
                ['-u', '--user', "Specify your LinkedIn email", {
                        required: "Please enter your #LinkedIn email#",
                        env: 'LINKEDIN_USER'
                    }],
                ['-p', '--pass', "Specify your LinkedIn password", {
                        required: 'Please enter your #LinkedIn password#:',
                        type: 'password',
                        env: 'LINKEDIN_PASS'
                    }]
            ], '[options]\t')
        ], hola.prototype, "tui", null);
        hola = __decorate([
            cli
        ], hola);
        return hola;
    }());

    return hola;

}));
