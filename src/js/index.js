import "./../style/main.scss"
import "../github64.png"
import "../icon.png"
import { elements } from "./elements"
import { Matrix } from "./matrix"
import lang from "../lang.json"

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
    changeCardLanguage("es")
  } else {
    e.target.childNodes[1].innerText = "en"
    changeCardLanguage("en")
  }
})

const cardIds = [
  "nfc",
  "cli",
  "minimal",
  "twittear",
  "calendar",
  "todo",
  "music",
  "movie",
  "almuerzi",
  "weather",
  "weatherandroid",
  "social",
  "neopixel",
  "page",
]

const paragraph = ["first", "second", "third"]
const navItems = ["about", "projects", "contact"]
const links = ["code", "download", "guide", "guía", "código", "descargar"]

const linksContainer = document.getElementsByClassName("card__links")
const arrLinksContainer = Array.from(linksContainer)

const changeCardLanguage = language => {
  cardIds.forEach(id => {
    document.getElementById(id).childNodes[1].innerText = lang[language][id].p
    document.getElementById(id).childNodes[2].innerText =
      lang[language][id].code
  })

  navItems.forEach(item => {
    document.getElementById(item).childNodes[0].innerText =
      lang[language].nav["nav-" + item]
    document.getElementById("nav-" + item).childNodes[0].innerText =
      lang[language].nav["nav-" + item]
  })

  paragraph.forEach((paragraph, i) => {
    document.getElementById("aboutcontent").childNodes[i].innerText =
      lang[language]["aboutcontent"][paragraph]
  })

  document.getElementById("message").childNodes[0].innerText =
    lang[language]["message"]

  arrLinksContainer.forEach(container => {
    let containerArr = Array.from(container.childNodes)
    containerArr.forEach(e => {
      if (e.tagName == "A") {
        let finded = links.find(link => e.innerText == link)
        if (finded) e.innerText = lang.links[finded]
      }
    })
  })
}

const menuBtn = document.getElementById("menu")
const ul = document.getElementById("ul")

menuBtn.addEventListener("click", () => {
  ul.style.display = ul.style.display !== "flex" ? "flex" : "none"
})
