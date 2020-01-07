import Svg from "./svg";
const anim = document.getElementById('animate')
console.log(anim);

export default class Matrix {
    constructor(quantity, rowElements, elementSize) {
        this._elementSize = elementSize
        this._quantity = quantity
        this._rowElements = rowElements
        this._totalElements = []
        for (let index = 0; index < this._quantity; index++) {

            const svg = new Svg(this._elementSize, this._rowElements)
            this._totalElements.push(svg.svg)
        }
    }
}