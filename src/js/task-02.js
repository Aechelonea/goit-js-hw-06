const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElement = document.querySelector("#ingredients")

ingredients.forEach(el => {
  let li = document.createElement("li")
  li.innerText = el
  li.classList.add("item")
  ingredientsListElement.appendChild(li)
})