import { Base } from './base';
export declare abstract class Editor extends Base {
    el: HTMLElement;
    nodeName: string;
    value: any;
    name: string;
    protected abstract getValue(): any;
    protected abstract setValue(value: any): any;
    update(): void;
    addEventListener(event: string, fn: any): void;
    removeEventListener(event: string, fn: any): void;
}
