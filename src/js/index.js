import "./../style/main.scss"
import "../github64.png"
import "../icon.png"
import { elements } from "./elements"
import { Matrix } from "./matrix"
import {changeLanguage} from './changeLanguage'

const applyWaveAnimation = (elementsNumber, elementsPerRow, rows = 35) => {
  for (let i = rows; i < elementsNumber; i += elementsPerRow) {
    document.querySelector(
      `#animate > svg:nth-child(${i})`,
    ).style.animation = `wave 3s ${rows / elementsPerRow}s infinite ease-out`
  }

  rows == 1
    ? 1
    : applyWaveAnimation(elementsNumber, elementsPerRow, (rows -= 1))
}

applyWaveAnimation(elements.number, elements.perRow, elements.perRow)

document.getElementById("lang").addEventListener("click", e => {
  let currentLang = e.target.childNodes[1].innerText

  if (currentLang === "en") {
    e.target.childNodes[1].innerText = "es"
    changeLanguage("es")
  } else {
    e.target.childNodes[1].innerText = "en"
    changeLanguage("en")
  }
})

const menuBtn = document.getElementById("menu")
const ul = document.getElementById("ul")

menuBtn.addEventListener("click", () => {
  ul.style.display = ul.style.display !== "flex" ? "flex" : "none"
})
