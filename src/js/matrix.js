import Svg from "./svg";

export const elements = new (function() {
    this.perColumn = 10;
    this.perRow = 35;
    this.size = animate.offsetWidth / this.perRow;
    this.number = this.perRow * this.perColumn;
})();

const Matrix = new (class {
    constructor(quantity, rowElements, elementSize) {
        this._elementSize = elementSize;
        this._quantity = quantity;
        this._rowElements = rowElements;
        this._totalElements = [];
        for (let index = 0; index < this._quantity; index++) {
            const svg = new Svg(this._elementSize, this._rowElements);
            this._totalElements.push(svg.svg);
        }
    }
})(elements.number, elements.perRow, elements.size);
