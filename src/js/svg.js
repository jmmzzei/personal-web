export default class Svg {
  constructor(width) {
    this.width = width;
    this.createSvg();
  }

  createSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", this.width);
    svg.setAttribute("height", this.width);
    this.createCir(svg);
  }

  createCir(svg) {
    const cir = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    cir.setAttribute("cx", this.width / 2);
    cir.setAttribute("cy", this.width / 2);
    cir.setAttribute("r", this.width / 10);
    cir.setAttribute("fill", "#fff");

    svg.appendChild(cir);
    document.getElementById("animate").appendChild(svg);
    this.addEvent(svg);
  }

  addEvent(svg) {
    svg.addEventListener("mouseover", e => {
      e.srcElement.firstChild.setAttribute("class", "mouse-over");
    });
  }
}
