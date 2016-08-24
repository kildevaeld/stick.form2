"use strict";
const base_1 = require('./base');
const stick_1 = require('stick');
class Editor extends base_1.Base {
    get value() {
        return this.getValue();
    }
    set value(value) {
        this.setValue(value);
    }
    get name() {
        if (this.el) {
            return this.el.getAttribute('name');
        }
        return this.attributes['name'];
    }
    //protected abstract setHelpBlock(block:HTMLDivElement);
    update() { }
    addEventListener(event, fn) {
        if (this.el) {
            stick_1.utils.addEventListener(this.el, event, fn);
        }
    }
    removeEventListener(event, fn) {
        if (this.el) {
            stick_1.utils.removeEventListener(this.el, event, fn);
        }
    }
}
exports.Editor = Editor;
