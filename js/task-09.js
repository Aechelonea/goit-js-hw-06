function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorLabelElement = document.querySelector(".color")
const changeColorButton = document.querySelector(".change-color")

changeColorButton.addEventListener("click", () => {
  let tempColor = getRandomHexColor()
  colorLabelElement.innerText = tempColor
  document.querySelector("body").style.backgroundColor = tempColor
})

