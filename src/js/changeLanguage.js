import lang from '../lang.json'

export const changeLanguage = language => {
  const cardIds = [
    'nfc',
    'graph',
    'cli',
    'minimal',
    'twittear',
    'calendar',
    'todo',
    'music',
    'movie',
    'almuerzi',
    'weather',
    'weatherandroid',
    'social',
    'neopixel',
    'page',
  ]

  const paragraph = ['first', 'second', 'third']
  const navItems = ['about', 'projects', 'contact']
  const links = ['code', 'download', 'guide', 'guía', 'código', 'descargar']
  const arrLinksContainer = Array.from(
    document.getElementsByClassName('card__links'),
  )
  
  cardIds.forEach(id => {
    document.getElementById(id).childNodes[1].innerText = lang[language][id].p
    document.getElementById(id).childNodes[2].innerText =
      lang[language][id].code
  })

  navItems.forEach(item => {
    document.getElementById(item).childNodes[0].innerText =
      lang[language].nav['nav-' + item]
    document.getElementById('nav-' + item).childNodes[0].innerText =
      lang[language].nav['nav-' + item]
  })

  paragraph.forEach((paragraph, i) => {
    document.getElementById('aboutcontent').childNodes[i].innerText =
      lang[language]['aboutcontent'][paragraph]
  })

  document.getElementById('message').childNodes[0].innerText =
    lang[language]['message']

  arrLinksContainer.forEach(container => {
    let containersArr = Array.from(container.childNodes)
    containersArr.forEach(e => {
      if (e.tagName == 'A') {
        let finded = links.find(link => e.innerText == link)
        if (finded) e.innerText = lang.links[finded]
      }
    })
  })
}
