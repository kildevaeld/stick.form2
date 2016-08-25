import { Base } from './base';
export declare abstract class Field extends Base {
    nodeName: string;
    initialize(): void;
    update(): void;
}
