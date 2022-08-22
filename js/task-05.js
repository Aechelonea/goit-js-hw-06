const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")
nameInput.addEventListener("input", () => {
    if (nameInput.value != "") {
        nameOutput.innerText = nameInput.value
    } else {
        nameOutput.innerText = "Annonymous"
    }
})