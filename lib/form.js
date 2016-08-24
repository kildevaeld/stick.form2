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
const vform = require('views.form');
const orange_1 = require('orange');
const stick_1 = require('stick');
let Form = class Form extends base_1.Base {
    initialize() {
        let el = this.document.createElement('form');
        for (let a in orange_1.omit(this.attributes, [])) {
            el.setAttribute(a, this.attributes[a]);
        }
        let name = this.attributes['name'];
        if (name) {
            this.view.context.set(`$ui.${name}`, this);
        }
        this.section.appendChild(el);
        this.subview = this.childTemplate.view(this.view.context, {
            parent: this.view
        });
        el.appendChild(this.subview.render());
        this.form = new vform.Form({
            el: el,
            createHelpAreas: true,
            validateOnChange: true,
        });
        this.form.render();
        this.form.model = new stick_1.Model();
    }
    update() {
        this.subview.update();
    }
    validate() {
        this.form.validate();
    }
};
Form = __decorate([
    stick_1.decorators.component("form"), 
    __metadata('design:paramtypes', [])
], Form);
exports.Form = Form;
