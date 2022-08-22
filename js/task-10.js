function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNumberElement = document.querySelector("input");
const createBoxesButton = document.querySelector("[data-create]");
const destroyBoxesButton = document.querySelector("[data-destroy]");
const boxesDivParentElement = document.querySelector("#boxes");

function createBoxes() {
  if (inputNumberElement.value != "") {
    for (let i = 0; i < parseInt(inputNumberElement.value); i++) {
      let div = document.createElement("div");
      if (i === 0) {
        div.style.width = "30px";
        div.style.height = "30px";
      } else {
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;
      }
      div.style.backgroundColor = getRandomHexColor();
      boxesDivParentElement.appendChild(div);
    }
  }
}

function destroyBoxes() {
  if (inputNumberElement.value != "") {
    for (let i = boxesDivParentElement.childElementCount - 1; i >= 0; i--) {
      boxesDivParentElement.children[i].remove();
    }
  }
}

createBoxesButton.addEventListener("click", () => {
  createBoxes();
});

destroyBoxesButton.addEventListener("click", () => {
  destroyBoxes();
});
