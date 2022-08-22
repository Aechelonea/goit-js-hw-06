const validationInput = document.querySelector("#validation-input")

validationInput.addEventListener("blur", () => {
    validationInput.className = ""

    if (validationInput.value.length === parseInt(validationInput.dataset.length)) {
        validationInput.classList.add("valid")
    } else {
        validationInput.classList.add("invalid")
    }
})