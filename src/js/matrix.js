import Svg from "./svg"
import { elements } from "./elements"

export const Matrix = new (class {
  constructor(elements) {
    this.elementSize = elements.size
    this.quantity = elements.number
    this.rowElements = elements.perRow
    this.totalElements = []
    for (let index = 0; index < this.quantity; index++) {
      const svg = new Svg(this.elementSize)
      this.totalElements.push(svg)
    }
  }
})(elements)
