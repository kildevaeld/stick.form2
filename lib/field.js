"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const base_1 = require('./base');
//import {Editor} from './editor';
const stick_1 = require('stick');
const browser_1 = require('orange/browser');
let Field = class Field extends base_1.Base {
    constructor(...args) {
        super(...args);
        this.nodeName = "DIV";
    }
    initialize() {
        let el = document.createElement('div');
        for (let a in browser_1.omit(this.attributes, [])) {
            el.setAttribute(a, this.attributes[a]);
        }
        browser_1.addClass(el, 'form-field');
        this.section.appendChild(el);
        this.subview = this.childTemplate.view(this.view.context, {
            parent: this.view
        });
        el.appendChild(this.subview.render());
    }
    update() { }
    destroy() {
        /*if (this.editor) {
            this.editor.off();
        } else if (this.element) {
            utils.removeEventListener(this.el, 'change', this._onElementChange);
        }

        if (this.subview) {
            this.subview.$destroy();
        }

        super.destroy();*/
        super.destroy();
    }
};
Field = __decorate([
    stick_1.decorators.component('field'), 
    __metadata('design:paramtypes', [])
], Field);
exports.Field = Field;
