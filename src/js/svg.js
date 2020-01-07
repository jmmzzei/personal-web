export default class Svg {
    constructor(width, rowElements) {
        this._width = width
        this._rowElements = rowElements
        this._prevSi = ''

        this.createSvg()
        this.createCir(this._svg)
        this.addEvent(this._svg)
        this.addEventOver(this._svg)
        this._keepSize = false
    }
 
    get keepSize() {return this._keepSize}
    set keepSize(newState) {this._keepSize = newState}

    get width() { return this._width }

    set width(newWidth) {
        this._width = newWidth
    }

    get svg() {
        return this._cir
    }

    createSvg() {
        const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg1.setAttribute("width", this._width);
        svg1.setAttribute("height", this._width);
        //svg1.setAttribute('class', 'border')
        this._svg = svg1
    }

    createCir(svg1) {
        const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        cir1.setAttribute("cx", this._width / 2);
        cir1.setAttribute("cy", this._width / 2);
        cir1.setAttribute("r", this._width / 10);
        cir1.setAttribute("fill", '#777')

        svg1.appendChild(cir1);
        document.getElementById('animate').appendChild(svg1)
        this._cir = cir1
    }


    addEvent(e) {
        this._svg.addEventListener('mouseover', (e) => {
            let selected = 0

            for (let i = 1; i < e.target.parentNode.childNodes.length; i++) {
                if (this._keepSize) {
                    e.target.parentNode.childNodes[i].firstChild.setAttribute('r', this._width / 10)
                }                

                if (e.target.parentNode.childNodes[i].firstChild.className.animVal != '') {
                    e.target.parentNode.childNodes[i].firstChild.setAttribute('class', 'inicial')
                }
            }

            e.srcElement.childNodes[0].setAttribute("class", "si")
            this._prevSi = e.srcElement


            let a = this._width / 30

            const interval = setInterval(function name() {
                e.target.firstChild.setAttribute('r', a)
                a++
                if (a > 10) {
                    clearInterval(interval)
                }
            }, 5);
            

            for (let i = 1; i < e.target.parentNode.childNodes.length; i++) {
                if (e.target.parentNode.childNodes[i].firstChild.className.animVal == 'si') {
                    selected = i
                }
            }

            e.target.previousSibling.childNodes[0].setAttribute('class', 'svg')
            e.target.nextSibling.childNodes[0].setAttribute('class', 'svg')

            e.target.previousSibling.childNodes[0].setAttribute('r', this._width / 8)
            e.target.nextSibling.childNodes[0].setAttribute('r', this._width / 8)

            e.target.parentNode.childNodes[selected - this._rowElements].firstChild.setAttribute("class", "svg")
            e.target.parentNode.childNodes[selected - this._rowElements - 1].firstChild.setAttribute("class", "svg")
            e.target.parentNode.childNodes[selected - this._rowElements + 1].firstChild.setAttribute("class", "svg")

            e.target.parentNode.childNodes[selected + this._rowElements].firstChild.setAttribute("class", "svg")
            e.target.parentNode.childNodes[selected + this._rowElements - 1].firstChild.setAttribute("class", "svg")
            e.target.parentNode.childNodes[selected + this._rowElements + 1].firstChild.setAttribute("class", "svg")

            e.target.parentNode.childNodes[selected - this._rowElements].firstChild.setAttribute('r', this._width / 8)
            e.target.parentNode.childNodes[selected + this._rowElements].firstChild.setAttribute('r', this._width / 8)

        })
    }

    addEventOver(e) {
        this._svg.addEventListener('click', (e) => {      

            let selected = 0
            for (let i = 1; i < e.target.parentNode.childNodes.length; i++) {
                if (e.target.parentNode.childNodes[i].firstChild.className.animVal == 'si') {
                    selected = i
                }
            }
            
            e.srcElement.childNodes[0].setAttribute("class", "none")

            e.target.parentNode.childNodes[selected - this._rowElements].firstChild.setAttribute("class", "")
            e.target.parentNode.childNodes[selected - this._rowElements - 1].firstChild.setAttribute("class", "")
            e.target.parentNode.childNodes[selected - this._rowElements + 1].firstChild.setAttribute("class", "")

            e.target.parentNode.childNodes[selected + this._rowElements].firstChild.setAttribute("class", "")
            e.target.parentNode.childNodes[selected + this._rowElements - 1].firstChild.setAttribute("class", "")
            e.target.parentNode.childNodes[selected + this._rowElements + 1].firstChild.setAttribute("class", "")

        })
    }

}
