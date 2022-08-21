const categories = document.querySelector("#categories")

console.log(`Number of categories: ${categories.childElementCount}

`)

for (let i = 0; i < categories.childElementCount; i++) {
    let childElements = categories.children
    console.log(`Category: ${childElements[i].firstElementChild.innerText}`)
    let ulElements = childElements[i].innerText.split("\n")
    ulElements.shift()
    console.log(`Elements: ${ulElements.length}
    `)
}