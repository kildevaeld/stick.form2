"use strict";
const stick_1 = require('stick');
class Base extends stick_1.BaseComponent {
    destroy() {
        if (this.subview) {
            this.subview.$destroy();
        }
        super.destroy();
    }
}
exports.Base = Base;
