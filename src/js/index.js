import './../style/main.scss'

console.log(document.getElementById('animate').offsetWidth);

const animate = document.getElementById('animate')

import Matrix from './matrix'

const elementsPerRow = 35, 
      elementsPerColumn = 10,
      elementSize = animate.offsetWidth/elementsPerRow;

const elementsNumber = elementsPerRow * elementsPerColumn

new Matrix(elementsNumber, elementsPerRow, elementSize)

const rows = 35

console.log(`rows: ${rows}`);
console.log(`elperrow: ${elementsPerRow}`);
console.log(rows / elementsPerRow);

function wave(elementsNumber, elementsPerRow, rows) {

    for (let i = rows; i < elementsNumber; i += elementsPerRow) {
        document.querySelector(`#animate > svg:nth-child(${i})`).style.animation = `wave 3s ${rows/elementsPerRow}s infinite ease-out`

        // document.querySelector(`.main > svg:nth-child(${i})`).style.fill = `rgb(2${Math.floor(i/5)},${10 + Math.floor(i/5)},${30 + Math.floor(i/5)})`
    }

    if (rows == 1) {
        return 1
    } else {        
        return wave(elementsNumber, elementsPerRow, rows -= 1)
    }
}

wave(elementsNumber, elementsPerRow, elementsPerRow)

document.getElementById('submit').addEventListener('click', e => {
    e.preventDefault()
    console.log('a');
})


document.getElementById('nav-projects').addEventListener('mouseenter', e => {
    document.getElementById('projects').firstChild.style.color = '#fff'
    document.getElementById('projects').firstChild.style.transition = '.4s'
    
})

document.getElementById('nav-projects').addEventListener('mouseleave', e => {
    document.getElementById('projects').firstChild.style.color = 'rgb(56, 56, 56)';
})