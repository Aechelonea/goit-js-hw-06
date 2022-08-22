const fontSizeControl = document.querySelector("#font-size-control")
const text = document.querySelector("#text")
text.style.fontSize = "56px"

fontSizeControl.addEventListener("input", () => {
    console.log(text.style.fontSize)
    text.style.fontSize = `${fontSizeControl.value}px` 
})