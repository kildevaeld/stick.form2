import { Base } from './base';
import * as vform from 'views.form';
export declare class Form extends Base {
    form: vform.Form;
    el: HTMLFormElement;
    initialize(): void;
    update(): void;
    validate(): void;
}
