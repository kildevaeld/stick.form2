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
	__export(__webpack_require__(7));

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

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
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
	            this.form = new vform.Form({
	                el: el,
	                createHelpAreas: true,
	                validateOnChange: true
	            });
	            this.form.render();
	            this.form.model = new stick_1.Model();
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            this.subview.update();
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

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Base).apply(this, arguments));
	    }

	    _createClass(Base, [{
	        key: "destroy",
	        value: function destroy() {
	            if (this.subview) {
	                this.subview.$destroy();
	            }
	            _get(Object.getPrototypeOf(Base.prototype), "destroy", this).call(this);
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

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
	var orange_1 = __webpack_require__(5);
	var Field = function (_base_1$Base) {
	    _inherits(Field, _base_1$Base);

	    function Field() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Field);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Field)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.nodeName = "DIV";
	        return _this;
	    }

	    _createClass(Field, [{
	        key: "initialize",
	        value: function initialize() {
	            var el = document.createElement('div');
	            for (var a in orange_1.omit(this.attributes, [])) {
	                el.setAttribute(a, this.attributes[a]);
	            }
	            orange_1.addClass(el, 'form-field');
	            this.section.appendChild(el);
	            this.subview = this.childTemplate.view(this.view.context, {
	                parent: this.view
	            });
	            el.appendChild(this.subview.render());
	        }
	    }, {
	        key: "update",
	        value: function update() {}
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            /*if (this.editor) {
	                this.editor.off();
	            } else if (this.element) {
	                utils.removeEventListener(this.el, 'change', this._onElementChange);
	            }
	             if (this.subview) {
	                this.subview.$destroy();
	            }
	             super.destroy();*/
	            _get(Object.getPrototypeOf(Field.prototype), "destroy", this).call(this);
	        }
	    }]);

	    return Field;
	}(base_1.Base);
	Field = __decorate([stick_1.decorators.component('field'), __metadata('design:paramtypes', [])], Field);
	exports.Field = Field;

/***/ },
/* 7 */
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

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Editor).apply(this, arguments));
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