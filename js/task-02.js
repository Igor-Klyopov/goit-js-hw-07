const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("#ingredients");

const createIngredientsItems = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.textContent = ingredient;
    return ingredientsItemEl;
  });
};

const ingredientsItemsEls = createIngredientsItems(ingredients);

ingredientsListRef.append(...ingredientsItemsEls);
