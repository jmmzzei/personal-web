import "./../style/main.scss";
import { elements } from "./matrix";

const applyWaveAnimation = (elementsNumber, elementsPerRow, rows = 35) => {
  for (let i = rows; i < elementsNumber; i += elementsPerRow) {
    document.querySelector(
      `#animate > svg:nth-child(${i})`
    ).style.animation = `wave 3s ${rows / elementsPerRow}s infinite ease-out`;
    console.log(rows / elementsPerRow);
  }

  rows == 1
    ? 1
    : applyWaveAnimation(elementsNumber, elementsPerRow, (rows -= 1));
};

applyWaveAnimation(elements.number, elements.perRow, elements.perRow);

document.getElementById("submit").addEventListener("click", e => {
  e.preventDefault();
});
