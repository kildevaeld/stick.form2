
import {BaseComponent, TemplateView} from 'stick';

export class Base extends BaseComponent {
    subview: TemplateView;

    destroy () {
        if (this.subview) {
            this.subview.$destroy();
        }
        super.destroy();
    }
}