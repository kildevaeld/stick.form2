(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("stick"), require("views.form"), require("orange"));
	else if(typeof define === 'function' && define.amd)
		define(["stick", "views.form", "orange"], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory(require("stick"), require("views.form"), require("orange"));
	else
		root["stick"] = root["stick"] || {}, root["stick"]["form"] = factory(root["stick"], root["views"]["form"], root["orange"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(6));
	__export(__webpack_require__(18));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var base_1 = __webpack_require__(2);
	var vform = __webpack_require__(4);
	var orange_1 = __webpack_require__(5);
	var stick_1 = __webpack_require__(3);
	var Form = function (_base_1$Base) {
	    _inherits(Form, _base_1$Base);

	    function Form() {
	        _classCallCheck(this, Form);

	        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	    }

	    _createClass(Form, [{
	        key: "initialize",
	        value: function initialize() {
	            var el = this.document.createElement('form');
	            for (var a in orange_1.omit(this.attributes, [])) {
	                el.setAttribute(a, this.attributes[a]);
	            }
	            var name = this.attributes['name'];
	            if (name) {
	                this.view.context.set("$ui." + name, this);
	            }
	            this.section.appendChild(el);
	            this.subview = this.childTemplate.view(this.view.context, {
	                parent: this.view
	            });
	            el.appendChild(this.subview.render());
	            this.el = el;
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            this.subview.update();
	            if (!this.form) {
	                this.form = new vform.Form({
	                    el: this.el,
	                    createHelpAreas: true,
	                    validateOnChange: true
	                });
	                this.form.render();
	                this.form.model = new stick_1.Model();
	            }
	        }
	    }, {
	        key: "validate",
	        value: function validate() {
	            this.form.validate();
	        }
	    }]);

	    return Form;
	}(base_1.Base);
	Form = __decorate([stick_1.decorators.component("form"), __metadata('design:paramtypes', [])], Form);
	exports.Form = Form;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var stick_1 = __webpack_require__(3);

	var Base = function (_stick_1$BaseComponen) {
	    _inherits(Base, _stick_1$BaseComponen);

	    function Base() {
	        _classCallCheck(this, Base);

	        return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
	    }

	    _createClass(Base, [{
	        key: "destroy",
	        value: function destroy() {
	            if (this.subview) {
	                this.subview.$destroy();
	            }
	            _get(Base.prototype.__proto__ || Object.getPrototypeOf(Base.prototype), "destroy", this).call(this);
	        }
	    }]);

	    return Base;
	}(stick_1.BaseComponent);

	exports.Base = Base;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var base_1 = __webpack_require__(2);
	//import {Editor} from './editor';
	var stick_1 = __webpack_require__(3);
	var browser_1 = __webpack_require__(7);
	var Field = function (_base_1$Base) {
	    _inherits(Field, _base_1$Base);

	    function Field() {
	        var _ref;

	        _classCallCheck(this, Field);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = Field.__proto__ || Object.getPrototypeOf(Field)).call.apply(_ref, [this].concat(args)));

	        _this.nodeName = "DIV";
	        return _this;
	    }

	    _createClass(Field, [{
	        key: "initialize",
	        value: function initialize() {
	            var el = document.createElement('div');
	            for (var a in browser_1.omit(this.attributes, [])) {
	                el.setAttribute(a, this.attributes[a]);
	            }
	            browser_1.addClass(el, 'field form-field');
	            this.section.appendChild(el);
	            this.subview = this.childTemplate.view(this.view.context, {
	                parent: this.view
	            });
	            el.appendChild(this.subview.render());
	        }
	    }, {
	        key: "update",
	        value: function update() {}
	    }]);

	    return Field;
	}(base_1.Base);
	Field = __decorate([stick_1.decorators.component('field'), __metadata('design:paramtypes', [])], Field);
	exports.Field = Field;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(8));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(13));
	__export(__webpack_require__(11));
	__export(__webpack_require__(14));
	__export(__webpack_require__(12));
	__export(__webpack_require__(15));

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function isObject(obj) {
	    return obj === Object(obj);
	}
	exports.isObject = isObject;
	function isString(a) {
	    return typeof a === 'function';
	}
	exports.isString = isString;
	function isNumber(a) {
	    return typeof a === 'number';
	}
	exports.isNumber = isNumber;
	function isRegExp(a) {
	    return a && a instanceof RegExp;
	}
	exports.isRegExp = isRegExp;
	function isDate(a) {
	    return a && a instanceof Date;
	}
	exports.isDate = isDate;
	function isArray(a) {
	    return Array.isArray(a);
	}
	exports.isArray = isArray;
	function isFunction(a) {
	    return typeof a === 'function';
	}
	exports.isFunction = isFunction;
	var idCounter = 0;
	/** Generate an unique id with an optional prefix
	 * @param { string } prefix
	 * @return { string }
	 */
	function uniqueId() {
	    var prefix = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    return prefix + ++idCounter;
	}
	exports.uniqueId = uniqueId;
	function equal(a, b) {
	    return eq(a, b, [], []);
	}
	exports.equal = equal;
	function getOption(option, objs) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = objs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var o = _step.value;

	            if (isObject(o) && o[option]) return o[option];
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return null;
	}
	exports.getOption = getOption;
	exports.nextTick = function () {
	    var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
	    var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;
	    if (canSetImmediate) {
	        return function (f) {
	            return window.setImmediate(f);
	        };
	    }
	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	}();
	function xmlHttpRequest() {
	    var e;
	    if (window.hasOwnProperty('XMLHttpRequest')) {
	        return new XMLHttpRequest();
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.6.0');
	    } catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.3.0');
	    } catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp');
	    } catch (_error) {
	        e = _error;
	    }
	    throw e;
	}
	exports.xmlHttpRequest = xmlHttpRequest;
	var _has = Object.prototype.hasOwnProperty;
	function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a == 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    //if (a instanceof _) a = a._wrapped;
	    //if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className != toString.call(b)) return false;
	    switch (className) {
	        // Strings, numbers, dates, and booleans are compared by value.
	        case '[object String]':
	            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	            // equivalent to `new String("5")`.
	            return a == String(b);
	        case '[object Number]':
	            // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
	            // other numeric values.
	            return a !== +a ? b !== +b : a === 0 ? 1 / a === 1 / b : a === +b;
	        case '[object Date]':
	        case '[object Boolean]':
	            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	            // millisecond representations. Note that invalid dates with millisecond representations
	            // of `NaN` are not equivalent.
	            return +a == +b;
	        // RegExps are compared by their source patterns and flags.
	        case '[object RegExp]':
	            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
	    }
	    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	        // Linear search. Performance is inversely proportional to the number of
	        // unique nested structures.
	        if (aStack[length] == a) return bStack[length] == b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor,
	        bCtor = b.constructor;
	    if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor)) {
	        return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size = 0,
	        result = true;
	    // Recursively compare objects and arrays.
	    if (className === '[object Array]') {
	        // Compare array lengths to determine if a deep comparison is necessary.
	        size = a.length;
	        result = size === b.length;
	        if (result) {
	            // Deep compare the contents, ignoring non-numeric properties.
	            while (size--) {
	                if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	            }
	        }
	    } else {
	        // Deep compare objects.
	        for (var key in a) {
	            if (_has.call(a, key)) {
	                // Count the expected number of properties.
	                size++;
	                // Deep compare each member.
	                if (!(result = _has.call(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	            }
	        }
	        // Ensure that both objects contain the same number of properties.
	        if (result) {
	            for (key in b) {
	                if (_has.call(b, key) && !size--) break;
	            }
	            result = !size;
	        }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	}
	;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var arrays_1 = __webpack_require__(11);
	var strings_1 = __webpack_require__(12);
	var objects_1 = __webpack_require__(13);
	var nativeBind = Function.prototype.bind;
	function proxy(from, to, fns) {
	    if (!Array.isArray(fns)) fns = [fns];
	    fns.forEach(function (fn) {
	        if (typeof to[fn] === 'function') {
	            from[fn] = bind(to[fn], to);
	        }
	    });
	}
	exports.proxy = proxy;
	function bind(method, context) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	    }

	    if (typeof method !== 'function') throw new Error('method not at function');
	    if (nativeBind != null) return nativeBind.call.apply(nativeBind, [method, context].concat(_toConsumableArray(args)));
	    args = args || [];
	    var fnoop = function fnoop() {};
	    var fBound = function fBound() {
	        var ctx = this instanceof fnoop ? this : context;
	        return callFunc(method, ctx, args.concat(arrays_1.slice(arguments)));
	    };
	    fnoop.prototype = this.prototype;
	    fBound.prototype = new fnoop();
	    return fBound;
	}
	exports.bind = bind;
	function callFunc(fn, ctx) {
	    var args = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    switch (args.length) {
	        case 0:
	            return fn.call(ctx);
	        case 1:
	            return fn.call(ctx, args[0]);
	        case 2:
	            return fn.call(ctx, args[0], args[1]);
	        case 3:
	            return fn.call(ctx, args[0], args[1], args[2]);
	        case 4:
	            return fn.call(ctx, args[0], args[1], args[2], args[3]);
	        case 5:
	            return fn.call(ctx, args[0], args[1], args[2], args[3], args[4]);
	        default:
	            return fn.apply(ctx, args);
	    }
	}
	exports.callFunc = callFunc;
	function triggerMethodOn(obj, eventName, args) {
	    var ev = strings_1.camelcase("on-" + eventName.replace(':', '-'));
	    if (obj[ev] && typeof obj[ev] === 'function') {
	        callFunc(obj[ev], obj, args);
	    }
	    if (typeof obj.trigger === 'function') {
	        args = [eventName].concat(args);
	        callFunc(obj.trigger, obj, args);
	    }
	}
	exports.triggerMethodOn = triggerMethodOn;
	function inherits(parent, protoProps, staticProps) {
	    var child;
	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent's constructor.
	    if (protoProps && objects_1.has(protoProps, 'constructor')) {
	        child = protoProps.constructor;
	    } else {
	        child = function child() {
	            return parent.apply(this, arguments);
	        };
	    }
	    // Add static properties to the constructor function, if supplied.
	    objects_1.extend(child, parent, staticProps);
	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function.
	    var Surrogate = function Surrogate() {
	        this.constructor = child;
	    };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate();
	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) objects_1.extend(child.prototype, protoProps);
	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;
	    return child;
	}
	exports.inherits = inherits;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	/*class KeyValuePair<K, V> {
	    key: K;
	    value: V;
	    constructor(key: K, value: V) {
	        this.key = key;
	        this.value = value;
	    }
	}
	export class Map<K, V> { // class MapDDD<K,V> implements Map
	    // -------------- Fields -----------------------
	    private keyAndValues: Array<KeyValuePair<K, V>>;
	    // ---------------------------------------------
	    constructor() {
	        this.keyAndValues = [];
	    }
	    // --- Public Methods ---
	    getKeysOfValue(value: V) {
	        var keysToReturn: Array<K> = [];
	        var valueToFind = value;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (value.value === valueToFind) {
	                keysToReturn.push(value.key);
	            }
	        });
	        return keysToReturn;
	    }

	    // Standard:
	    clear(): void {
	        this.keyAndValues = [];
	    }
	    delete(key: K): boolean {
	        var found = false;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (found) return;
	            if (key === value.key) {
	                array = array.slice(0, index).concat(array.slice(index + 1));
	                found = true;
	            }
	        });
	        return found;
	    }
	    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            callbackfn.apply(thisArg, [value.value, value.key, this]);
	        }, this);
	    }
	    get(key: K): V {
	        var valueToReturn: V = undefined;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (valueToReturn !== undefined) return;
	            if (key === value.key) {
	                valueToReturn = value.value;
	            }
	        });
	        return valueToReturn;
	    }
	    has(key: K): boolean {
	        var found = false;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (found) return;
	            if (key === value.key) {
	                found = true;
	            }
	        });
	        return found;
	    }
	    set(key: K, value: V): Map<K, V> {
	        var found = false;
	        var valueToSet = value;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (found) return;
	            if (key === value.key) {
	                found = true;
	                value.value = valueToSet;
	            }
	        });
	        if (!found) {
	            this.keyAndValues.push(new KeyValuePair<K, V>(key, valueToSet));
	        }
	        return this;
	    }
	    // ----------------------

	    // Getters:
	    // Standard:
	    get size() {
	        return this.keyAndValues.length;
	    }
	}*/
	// Return a new array with duplicates removed

	function unique(array) {
	    var seen = new Map();
	    return array.filter(function (e, i) {
	        if (seen.has(e)) return false;
	        /*for (i += 1; i < array.length; i += 1) {
	          if (equal(e, array[i])) {
	            return false;
	          }
	        }*/
	        seen.set(e, true);
	        return true;
	    });
	}
	exports.unique = unique;
	function any(array, predicate) {
	    for (var i = 0, ii = array.length; i < ii; i++) {
	        if (predicate(array[i])) return true;
	    }
	    return false;
	}
	exports.any = any;
	function indexOf(array, item) {
	    for (var i = 0, len = array.length; i < len; i++) {
	        if (array[i] === item) return i;
	    }return -1;
	}
	exports.indexOf = indexOf;
	function find(array, callback, ctx) {
	    var v = void 0;
	    for (var i = 0, ii = array.length; i < ii; i++) {
	        if (callback.call(ctx, array[i])) return array[i];
	    }
	    return null;
	}
	exports.find = find;
	function slice(array, begin, end) {
	    return Array.prototype.slice.call(array, begin, end);
	}
	exports.slice = slice;
	function flatten(arr) {
	    return arr.reduce(function (flat, toFlatten) {
	        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	    }, []);
	}
	exports.flatten = flatten;
	function sortBy(obj, value, context) {
	    var iterator = typeof value === 'function' ? value : function (obj) {
	        return obj[value];
	    };
	    return obj.map(function (value, index, list) {
	        return {
	            value: value,
	            index: index,
	            criteria: iterator.call(context, value, index, list)
	        };
	    }).sort(function (left, right) {
	        var a = left.criteria,
	            b = right.criteria;
	        if (a !== b) {
	            if (a > b || a === void 0) return 1;
	            if (a < b || b === void 0) return -1;
	        }
	        return left.index - right.index;
	    }).map(function (item) {
	        return item.value;
	    });
	}
	exports.sortBy = sortBy;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	function camelcase(input) {
	    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
	        return group1.toUpperCase();
	    });
	}
	exports.camelcase = camelcase;
	;
	function truncate(str, length) {
	    var n = str.substring(0, Math.min(length, str.length));
	    return n + (n.length == str.length ? '' : '...');
	}
	exports.truncate = truncate;
	function humanFileSize(bytes) {
	    var si = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	    var thresh = si ? 1000 : 1024;
	    if (Math.abs(bytes) < thresh) {
	        return bytes + ' B';
	    }
	    var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	    var u = -1;
	    do {
	        bytes /= thresh;
	        ++u;
	    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
	    return bytes.toFixed(1) + ' ' + units[u];
	}
	exports.humanFileSize = humanFileSize;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var utils_1 = __webpack_require__(9);
	var arrays_1 = __webpack_require__(11);
	/**
	 * Takes a nested object and returns a shallow object keyed with the path names
	 * e.g. { "level1.level2": "value" }
	 *
	 * @param  {Object}      Nested object e.g. { level1: { level2: 'value' } }
	 * @return {Object}      Shallow object with path names e.g. { 'level1.level2': 'value' }
	 */
	function objToPaths(obj) {
	    var separator = arguments.length <= 1 || arguments[1] === undefined ? "." : arguments[1];

	    var ret = {};
	    for (var key in obj) {
	        var val = obj[key];
	        if (val && (val.constructor === Object || val.constructor === Array) && !isEmpty(val)) {
	            //Recursion for embedded objects
	            var obj2 = objToPaths(val);
	            for (var key2 in obj2) {
	                var val2 = obj2[key2];
	                ret[key + separator + key2] = val2;
	            }
	        } else {
	            ret[key] = val;
	        }
	    }
	    return ret;
	}
	exports.objToPaths = objToPaths;
	function isEmpty(obj) {
	    return Object.keys(obj).length === 0;
	}
	exports.isEmpty = isEmpty;
	function extend(obj) {
	    if (!utils_1.isObject(obj)) return obj;
	    var o = void 0,
	        k = void 0;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            o = _step.value;

	            if (!utils_1.isObject(o)) continue;
	            for (k in o) {
	                if (has(o, k)) obj[k] = o[k];
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return obj;
	}
	exports.extend = extend;
	var nativeAssign = Object.assign;
	function assign(target) {
	    if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert first argument to object');
	    }

	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	    }

	    if (nativeAssign) return nativeAssign.apply(undefined, [target].concat(args));
	    var to = Object(target);
	    for (var i = 0, ii = args.length; i < ii; i++) {
	        var nextSource = args[i];
	        if (nextSource === undefined || nextSource === null) {
	            continue;
	        }
	        nextSource = Object(nextSource);
	        var keysArray = Object.keys(Object(nextSource));
	        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	                to[nextKey] = nextSource[nextKey];
	            }
	        }
	    }
	    return to;
	}
	exports.assign = assign;
	var _has = Object.prototype.hasOwnProperty;
	function has(obj, prop) {
	    return _has.call(obj, prop);
	}
	exports.has = has;
	function pick(obj, props) {
	    var out = {},
	        prop = void 0;
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = props[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            prop = _step2.value;

	            if (has(obj, prop)) out[prop] = obj[prop];
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    return out;
	}
	exports.pick = pick;
	function omit(obj, props) {
	    var out = {};
	    for (var key in obj) {
	        if (!!~props.indexOf(key)) continue;
	        out[key] = obj[key];
	    }
	    return out;
	}
	exports.omit = omit;
	function result(obj, prop, ctx, args) {
	    var ret = obj[prop];
	    return typeof ret === 'function' ? ret.appl(ctx, args || []) : ret;
	}
	exports.result = result;
	function values(obj) {
	    var output = [];
	    for (var k in obj) {
	        if (has(obj, k)) {
	            output.push(obj[k]);
	        }
	    }return output;
	}
	exports.values = values;
	function intersectionObjects(a, b, predicate) {
	    var results = [],
	        aElement,
	        existsInB;
	    for (var i = 0, ii = a.length; i < ii; i++) {
	        aElement = a[i];
	        existsInB = arrays_1.any(b, function (bElement) {
	            return predicate(bElement, aElement);
	        });
	        if (existsInB) {
	            results.push(aElement);
	        }
	    }
	    return results;
	}
	function intersection(results) {
	    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        args[_key3 - 1] = arguments[_key3];
	    }

	    var lastArgument = args[args.length - 1];
	    var arrayCount = args.length;
	    var areEqualFunction = utils_1.equal;
	    if (typeof lastArgument === "function") {
	        areEqualFunction = lastArgument;
	        arrayCount--;
	    }
	    for (var i = 0; i < arrayCount; i++) {
	        var array = args[i];
	        results = intersectionObjects(results, array, areEqualFunction);
	        if (results.length === 0) break;
	    }
	    return results;
	}
	exports.intersection = intersection;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var arrays_1 = __webpack_require__(11);
	var utils_1 = __webpack_require__(9);
	exports.Promise = typeof window === 'undefined' ? global.Promise : window.Promise;
	// Promises
	function isPromise(obj) {
	    return obj && typeof obj.then === 'function';
	}
	exports.isPromise = isPromise;
	function toPromise(obj) {
	    /* jshint validthis:true */
	    if (!obj) {
	        return obj;
	    }
	    if (isPromise(obj)) {
	        return obj;
	    }
	    if (utils_1.isFunction(obj)) {
	        return thunkToPromise.call(this, obj);
	    }
	    if (Array.isArray(obj)) {
	        return arrayToPromise.call(this, obj);
	    }
	    if (utils_1.isObject(obj)) {
	        return objectToPromise.call(this, obj);
	    }
	    return exports.Promise.resolve(obj);
	}
	exports.toPromise = toPromise;
	/**
	 * Convert a thunk to a promise.
	 *
	 * @param {Function}
	 * @return {Promise}
	 * @api private
	 */
	function thunkToPromise(fn) {
	    /* jshint validthis:true */
	    var ctx = this;
	    return new exports.Promise(function (resolve, reject) {
	        fn.call(ctx, function (err, res) {
	            if (err) return reject(err);
	            if (arguments.length > 2) res = arrays_1.slice(arguments, 1);
	            resolve(res);
	        });
	    });
	}
	exports.thunkToPromise = thunkToPromise;
	/**
	 * Convert an array of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Array} obj
	 * @return {Promise}
	 * @api private
	 */
	function arrayToPromise(obj) {
	    return exports.Promise.all(obj.map(toPromise, this));
	}
	exports.arrayToPromise = arrayToPromise;
	/**
	 * Convert an object of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Object} obj
	 * @return {Promise}
	 * @api private
	 */
	function objectToPromise(obj) {
	    var results = new obj.constructor();
	    var keys = Object.keys(obj);
	    var promises = [];
	    for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var promise = toPromise.call(this, obj[key]);
	        if (promise && isPromise(promise)) defer(promise, key);else results[key] = obj[key];
	    }
	    return exports.Promise.all(promises).then(function () {
	        return results;
	    });
	    function defer(promise, key) {
	        // predefine the key in the result
	        results[key] = undefined;
	        promises.push(promise.then(function (res) {
	            results[key] = res;
	        }));
	    }
	}
	exports.objectToPromise = objectToPromise;
	function deferred() {
	    var ret = {};
	    ret.promise = new exports.Promise(function (resolve, reject) {
	        ret.resolve = resolve;
	        ret.reject = reject;
	        ret.done = function (err, result) {
	            if (err) return reject(err);else resolve(result);
	        };
	    });
	    return ret;
	}
	exports.deferred = deferred;
	;
	function callback(promise, callback, ctx) {
	    promise.then(function (result) {
	        callback.call(ctx, null, result);
	    }).catch(function (err) {
	        callback.call(ctx, err);
	    });
	}
	exports.callback = callback;
	function delay(timeout) {
	    var defer = deferred();
	    timeout == null ? utils_1.nextTick(defer.resolve) : setTimeout(defer.resolve, timeout);
	    return defer.promise;
	}
	exports.delay = delay;
	;
	function eachAsync(array, iterator, context) {
	    var accumulate = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	    return mapAsync(array, iterator, context, accumulate).then(function () {
	        return void 0;
	    });
	}
	exports.eachAsync = eachAsync;
	function mapAsync(array, iterator, context) {
	    var accumulate = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	    return new exports.Promise(function (resolve, reject) {
	        var i = 0,
	            len = array.length,
	            errors = [],
	            results = [];
	        function next(err, result) {
	            if (err && !accumulate) return reject(err);
	            if (err) errors.push(err);
	            if (i === len) return errors.length ? reject(arrays_1.flatten(errors)) : resolve(results);
	            var ret = iterator.call(context, array[i++]);
	            if (isPromise(ret)) {
	                ret.then(function (r) {
	                    results.push(r);next(null, r);
	                }, next);
	            } else if (ret instanceof Error) {
	                next(ret);
	            } else {
	                next(null);
	            }
	        }
	        next(null);
	    });
	}
	exports.mapAsync = mapAsync;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var self = global || Window;
	var iterable = 'Symbol' in self && 'iterator' in Symbol;
	// Build a destructive iterator for the value list
	function iteratorFor(items) {
	    var iterator = {
	        next: function next() {
	            var value = items.shift();
	            return { done: value === undefined, value: value };
	        }
	    };
	    if (iterable) {
	        iterator[Symbol.iterator] = function () {
	            return iterator;
	        };
	    }
	    return iterator;
	}

	var KeyValuePair = function KeyValuePair(key, value) {
	    _classCallCheck(this, KeyValuePair);

	    this.key = key;
	    this.value = value;
	};

	var MapShim = function () {
	    // ---------------------------------------------
	    function MapShim() {
	        _classCallCheck(this, MapShim);

	        this.keyAndValues = [];
	    }
	    // --- Public Methods ---


	    _createClass(MapShim, [{
	        key: 'getKeysOfValue',
	        value: function getKeysOfValue(value) {
	            var keysToReturn = [];
	            var valueToFind = value;
	            this.keyAndValues.forEach(function (value, index, array) {
	                if (value.value === valueToFind) {
	                    keysToReturn.push(value.key);
	                }
	            });
	            return keysToReturn;
	        }
	        // Standard:

	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.keyAndValues = [];
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(key) {
	            var found = false;
	            this.keyAndValues.forEach(function (value, index, array) {
	                if (found) return;
	                if (key === value.key) {
	                    array = array.slice(0, index).concat(array.slice(index + 1));
	                    found = true;
	                }
	            });
	            return found;
	        }
	    }, {
	        key: 'forEach',
	        value: function forEach(callbackfn, thisArg) {
	            this.keyAndValues.forEach(function (value, index, array) {
	                callbackfn.apply(thisArg, [value.value, value.key, this]);
	            }, this);
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            var valueToReturn = undefined;
	            this.keyAndValues.forEach(function (value, index, array) {
	                if (valueToReturn !== undefined) return;
	                if (key === value.key) {
	                    valueToReturn = value.value;
	                }
	            });
	            return valueToReturn;
	        }
	    }, {
	        key: 'has',
	        value: function has(key) {
	            var found = false;
	            this.keyAndValues.forEach(function (value, index, array) {
	                if (found) return;
	                if (key === value.key) {
	                    found = true;
	                }
	            });
	            return found;
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            var found = false;
	            var valueToSet = value;
	            this.keyAndValues.forEach(function (value, index, array) {
	                if (found) return;
	                if (key === value.key) {
	                    found = true;
	                    value.value = valueToSet;
	                }
	            });
	            if (!found) {
	                this.keyAndValues.push(new KeyValuePair(key, valueToSet));
	            }
	            return this;
	        }
	    }, {
	        key: 'keys',
	        value: function keys() {
	            var items = [];
	            this.forEach(function (value, name) {
	                items.push(name);
	            });
	            return iteratorFor(items);
	        }
	    }, {
	        key: 'values',
	        value: function values() {
	            var items = [];
	            this.forEach(function (value) {
	                items.push(value);
	            });
	            return iteratorFor(items);
	        }
	    }, {
	        key: 'entries',
	        value: function entries() {
	            var items = [];
	            this.forEach(function (value, name) {
	                items.push([name, value]);
	            });
	            return iteratorFor(items);
	        }
	        // ----------------------
	        // Getters:
	        // Standard:

	    }, {
	        key: Symbol.iterator,
	        value: function value() {
	            return this.entries();
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this.keyAndValues.length;
	        }
	    }]);

	    return MapShim;
	}();

	if (!global.Map) {
	    global.Map = MapShim;
	}
	exports.Map = global.Map;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var arrays_1 = __webpack_require__(11);
	var ElementProto = typeof Element !== 'undefined' && Element.prototype || {};
	var matchesSelector = ElementProto.matches || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector || ElementProto.oMatchesSelector || function (selector) {
	    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
	    return !!~arrays_1.indexOf(nodeList, this);
	};
	var elementAddEventListener = ElementProto.addEventListener || function (eventName, listener) {
	    return this.attachEvent('on' + eventName, listener);
	};
	var elementRemoveEventListener = ElementProto.removeEventListener || function (eventName, listener) {
	    return this.detachEvent('on' + eventName, listener);
	};
	var transitionEndEvent = function transitionEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitTransition': 'webkitTransitionEnd',
	        'MozTransition': 'transitionend',
	        'OTransition': 'oTransitionEnd otransitionend',
	        'transition': 'transitionend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	};
	var animationEndEvent = function animationEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitAnimation': 'webkitAnimationEnd',
	        'MozAnimation': 'animationend',
	        'OAnimation': 'oAnimationEnd oanimationend',
	        'animation': 'animationend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	};
	function matches(elm, selector) {
	    return matchesSelector.call(elm, selector);
	}
	exports.matches = matches;
	function addEventListener(elm, eventName, listener) {
	    var useCap = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	    elementAddEventListener.call(elm, eventName, listener, useCap);
	}
	exports.addEventListener = addEventListener;
	function removeEventListener(elm, eventName, listener) {
	    elementRemoveEventListener.call(elm, eventName, listener);
	}
	exports.removeEventListener = removeEventListener;
	var unbubblebles = 'focus blur change'.split(' ');
	var domEvents = [];
	function delegate(elm, selector, eventName, callback, ctx) {
	    var root = elm;
	    var handler = function handler(e) {
	        var node = e.target || e.srcElement;
	        // Already handled
	        if (e.delegateTarget) return;
	        for (; node && node != root; node = node.parentNode) {
	            if (matches(node, selector)) {
	                e.delegateTarget = node;
	                callback(e);
	            }
	        }
	    };
	    var useCap = !!~unbubblebles.indexOf(eventName);
	    addEventListener(elm, eventName, handler, useCap);
	    domEvents.push({ eventName: eventName, handler: handler, listener: callback, selector: selector });
	    return handler;
	}
	exports.delegate = delegate;
	function undelegate(elm, selector, eventName, callback) {
	    /*if (typeof selector === 'function') {
	        listener = <Function>selector;
	        selector = null;
	      }*/
	    var handlers = domEvents.slice();
	    for (var i = 0, len = handlers.length; i < len; i++) {
	        var item = handlers[i];
	        var match = item.eventName === eventName && (callback ? item.listener === callback : true) && (selector ? item.selector === selector : true);
	        if (!match) continue;
	        removeEventListener(elm, item.eventName, item.handler);
	        domEvents.splice(arrays_1.indexOf(handlers, item), 1);
	    }
	}
	exports.undelegate = undelegate;
	function addClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            if (elm.classList.contains(split[i].trim())) continue;
	            elm.classList.add(split[i].trim());
	        }
	    } else {
	        elm.className = arrays_1.unique(elm.className.split(' ').concat(className.split(' '))).join(' ');
	    }
	}
	exports.addClass = addClass;
	function removeClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            elm.classList.remove(split[i].trim());
	        }
	    } else {
	        var _split = elm.className.split(' '),
	            classNames = className.split(' '),
	            tmp = _split,
	            index = void 0;
	        for (var _i = 0, _ii = classNames.length; _i < _ii; _i++) {
	            index = _split.indexOf(classNames[_i]);
	            if (!!~index) _split = _split.splice(index, 1);
	        }
	    }
	}
	exports.removeClass = removeClass;
	function hasClass(elm, className) {
	    if (elm.classList) {
	        return elm.classList.contains(className);
	    }
	    var reg = new RegExp('\b' + className);
	    return reg.test(elm.className);
	}
	exports.hasClass = hasClass;
	function selectionStart(elm) {
	    if ('selectionStart' in elm) {
	        // Standard-compliant browsers
	        return elm.selectionStart;
	    } else if (document.selection) {
	        // IE
	        elm.focus();
	        var sel = document.selection.createRange();
	        var selLen = document.selection.createRange().text.length;
	        sel.moveStart('character', -elm.value.length);
	        return sel.text.length - selLen;
	    }
	}
	exports.selectionStart = selectionStart;
	var _events = {
	    animationEnd: null,
	    transitionEnd: null
	};
	function transitionEnd(elm, fn, ctx, duration) {
	    var event = _events.transitionEnd || (_events.transitionEnd = transitionEndEvent());
	    var callback = function callback(e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.transitionEnd = transitionEnd;
	function animationEnd(elm, fn, ctx, duration) {
	    var event = _events.animationEnd || (_events.animationEnd = animationEndEvent());
	    var callback = function callback(e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.animationEnd = animationEnd;
	exports.domReady = function () {
	    var fns = [],
	        _listener,
	        doc = document,
	        hack = doc.documentElement.doScroll,
	        domContentLoaded = 'DOMContentLoaded',
	        loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
	    if (!loaded) {
	        doc.addEventListener(domContentLoaded, _listener = function listener() {
	            doc.removeEventListener(domContentLoaded, _listener);
	            loaded = true;
	            while (_listener = fns.shift()) {
	                _listener();
	            }
	        });
	    }
	    return function (fn) {
	        loaded ? setTimeout(fn, 0) : fns.push(fn);
	    };
	}();
	function createElement(tag, attr) {
	    var elm = document.createElement(tag);
	    if (attr) {
	        for (var key in attr) {
	            elm.setAttribute(key, attr[key]);
	        }
	    }
	    return elm;
	}
	exports.createElement = createElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var utils_1 = __webpack_require__(9);
	var arrays_1 = __webpack_require__(11);
	var dom = __webpack_require__(16);
	var domEvents;
	var singleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function parseHTML(html) {
	    var parsed = singleTag.exec(html);
	    if (parsed) {
	        return document.createElement(parsed[0]);
	    }
	    var div = document.createElement('div');
	    div.innerHTML = html;
	    var element = div.firstChild;
	    return element;
	}

	var Html = function () {
	    function Html(el) {
	        _classCallCheck(this, Html);

	        if (!Array.isArray(el)) el = [el];
	        this._elements = el || [];
	    }

	    _createClass(Html, [{
	        key: 'get',
	        value: function get(n) {
	            n = n === undefined ? 0 : n;
	            return n >= this.length ? undefined : this._elements[n];
	        }
	    }, {
	        key: 'addClass',
	        value: function addClass(str) {
	            return this.forEach(function (e) {
	                dom.addClass(e, str);
	            });
	        }
	    }, {
	        key: 'removeClass',
	        value: function removeClass(str) {
	            return this.forEach(function (e) {
	                dom.removeClass(e, str);
	            });
	        }
	    }, {
	        key: 'hasClass',
	        value: function hasClass(str) {
	            return this._elements.reduce(function (p, c) {
	                return dom.hasClass(c, str);
	            }, false);
	        }
	    }, {
	        key: 'attr',
	        value: function attr(key, value) {
	            var attr = void 0;
	            if (typeof key === 'string' && value) {
	                attr = _defineProperty({}, key, value);
	            } else if (typeof key == 'string') {
	                if (this.length) return this.get(0).getAttribute(key);
	            } else if (utils_1.isObject(key)) {
	                attr = key;
	            }
	            return this.forEach(function (e) {
	                for (var k in attr) {
	                    e.setAttribute(k, attr[k]);
	                }
	            });
	        }
	    }, {
	        key: 'text',
	        value: function text(str) {
	            if (arguments.length === 0) {
	                return this.length > 0 ? this.get(0).textContent : null;
	            }
	            return this.forEach(function (e) {
	                return e.textContent = str;
	            });
	        }
	    }, {
	        key: 'html',
	        value: function html(_html) {
	            if (arguments.length === 0) {
	                return this.length > 0 ? this.get(0).innerHTML : null;
	            }
	            return this.forEach(function (e) {
	                return e.innerHTML = _html;
	            });
	        }
	    }, {
	        key: 'css',
	        value: function css(attr, value) {
	            if (arguments.length === 2) {
	                return this.forEach(function (e) {
	                    if (attr in e.style) e.style[attr] = String(value);
	                });
	            } else {
	                return this.forEach(function (e) {
	                    for (var k in attr) {
	                        if (attr in e.style) e.style[k] = String(attr[k]);
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'parent',
	        value: function parent() {
	            var out = [];
	            this.forEach(function (e) {
	                if (e.parentElement) {
	                    out.push(e.parentElement);
	                }
	            });
	            return new Html(out);
	        }
	    }, {
	        key: 'clone',
	        value: function clone() {
	            return new Html(this.map(function (m) {
	                return m.cloneNode();
	            }));
	        }
	    }, {
	        key: 'find',
	        value: function find(str) {
	            var out = [];
	            this.forEach(function (e) {
	                out = out.concat(arrays_1.slice(e.querySelectorAll(str)));
	            });
	            return new Html(out);
	        }
	    }, {
	        key: 'map',
	        value: function map(fn) {
	            var out = new Array(this.length);
	            this.forEach(function (e, i) {
	                out[i] = fn(e, i);
	            });
	            return out;
	        }
	    }, {
	        key: 'forEach',
	        value: function forEach(fn) {
	            this._elements.forEach(fn);
	            return this;
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this._elements.length;
	        }
	    }], [{
	        key: 'query',
	        value: function query(_query, context) {
	            if (typeof context === 'string') {
	                context = document.querySelectorAll(context);
	            }
	            var html = void 0;
	            var els = void 0;
	            if (typeof _query === 'string') {
	                if (_query.length > 0 && _query[0] === '<' && _query[_query.length - 1] === ">" && _query.length >= 3) {
	                    return new Html([parseHTML(_query)]);
	                }
	                if (context) {
	                    if (context instanceof HTMLElement) {
	                        els = arrays_1.slice(context.querySelectorAll(_query));
	                    } else {
	                        html = new Html(arrays_1.slice(context));
	                        return html.find(_query);
	                    }
	                } else {
	                    els = arrays_1.slice(document.querySelectorAll(_query));
	                }
	            } else if (_query && _query instanceof Element) {
	                els = [_query];
	            } else if (_query && _query instanceof NodeList) {
	                els = arrays_1.slice(_query);
	            }
	            return new Html(els);
	        }
	    }]);

	    return Html;
	}();

	exports.Html = Html;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var base_1 = __webpack_require__(2);
	var stick_1 = __webpack_require__(3);

	var Editor = function (_base_1$Base) {
	    _inherits(Editor, _base_1$Base);

	    function Editor() {
	        _classCallCheck(this, Editor);

	        return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
	    }

	    _createClass(Editor, [{
	        key: 'update',

	        //protected abstract setHelpBlock(block:HTMLDivElement);
	        value: function update() {}
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener(event, fn) {
	            if (this.el) {
	                stick_1.utils.addEventListener(this.el, event, fn);
	            }
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(event, fn) {
	            if (this.el) {
	                stick_1.utils.removeEventListener(this.el, event, fn);
	            }
	        }
	    }, {
	        key: 'value',
	        get: function get() {
	            return this.getValue();
	        },
	        set: function set(value) {
	            this.setValue(value);
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            if (this.el) {
	                return this.el.getAttribute('name');
	            }
	            return this.attributes['name'];
	        }
	    }]);

	    return Editor;
	}(base_1.Base);

	exports.Editor = Editor;

/***/ }
/******/ ])
});
;