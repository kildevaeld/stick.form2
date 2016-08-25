
import {Base} from './base';
//import {Editor} from './editor';
import {TemplateView, decorators} from 'stick';
import {Form} from './form';
import * as vform from 'views.form';
import {omit, addClass} from 'orange/browser';

@decorators.component('field')
export abstract class Field extends Base {
    nodeName = "DIV";
   
    initialize () {
        
        let el = document.createElement('div');
        for (let a in omit(this.attributes, [])) {
            el.setAttribute(a, this.attributes[a]);
        }

        addClass(el, 'field form-field');

        this.section.appendChild(el);

        this.subview = <TemplateView>this.childTemplate.view(this.view.context, {
            parent: this.view
        });

        el.appendChild(this.subview.render());

    }

   
    update () {}
    
}