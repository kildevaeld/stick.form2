
import {Base} from './base';
import * as vform from 'views.form';
import {omit} from 'orange';
import {TemplateView, decorators, Model} from 'stick';

@decorators.component("form")
export class Form extends Base {
    form: vform.Form;
    el: HTMLFormElement;
    initialize() {
        let el = this.document.createElement('form');
        for (let a in omit(this.attributes, [])) {
            el.setAttribute(a, this.attributes[a]);
        }

        let name = this.attributes['name'];
        if (name) {
            this.view.context.set(`$ui.${name}`, this);
        }
        

        this.section.appendChild(el);

        this.subview = <TemplateView>this.childTemplate.view(this.view.context, {
            parent: this.view
        });

        el.appendChild(this.subview.render());

        
        this.el = el;
        

    }

    update () {
        this.subview.update();

        if (!this.form) {
            this.form = new vform.Form({
                el: this.el,
                createHelpAreas: true,
                validateOnChange: true,
            //model: this.view.context
            });

            this.form.render();

            this.form.model = new Model();
        }
    }

    validate () {
        this.form.validate();
    }
    
    
}