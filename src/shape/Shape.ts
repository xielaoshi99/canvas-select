import { createUuid } from '../tools';

interface ShapeProp {
    type: number;
    [key: string]: any;
}
export default class Shape {
    public label: string = '';
    public coor: any[] = [];
    public strokeStyle: string;
    public fillStyle: string;
    public labelFillStyle: string;
    public textFillStyle: string;
    public labelFont: string;
    public type: number; // 形状
    public active: boolean = false;
    public hide: boolean = false;
    public creating: boolean = false;
    public dragging: boolean = false;
    public index: number;
    public uuid: string = createUuid();
    public meta: Object = {};
    constructor(item: ShapeProp, index: number) {
        this.index = index;
        Object.assign(this, item);
    }
}
