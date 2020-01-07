import Svg from "./svg";
const anim = document.getElementById('animate')
console.log(anim);

export default class Matrix {
    constructor(quantity, rowElements) {
        this._quantity = quantity
        this._rowElements = rowElements
        this._totalElements = []
        for (let index = 0; index < this._quantity; index++) {

            const svg = new Svg(20, this._rowElements)
            this._totalElements.push(svg.svg)
        }
    }
}