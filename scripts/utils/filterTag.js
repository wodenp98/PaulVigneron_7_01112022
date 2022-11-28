let tagsClicked = [];

function selectTags(recipes) {
  const textTag = document.querySelectorAll(
    ".appliances-li, .ustensils-li, .ingredients-li"
  );

  textTag.forEach((text) => {
    text.addEventListener("click", () => {
      text.classList.add("disabled");
      tagsClicked.push(text);
      displayTags();
      searchTags(recipes);
    });
  });
}

function displayTags() {
  const tagsContainer = document.querySelector(".tags");
  const div = document.createElement("div");

  tagsClicked.forEach((element) => {
    div.innerHTML = `<span class="tag-span">${element.innerText}</span>
    <i class="fa-regular fa-circle-xmark delete-cross"></i>
      `;
    div.classList.add("tags-container");
    tagsContainer.appendChild(div);
    element.className == "appliances-li disabled"
      ? (div.style.backgroundColor = "#68d9a4")
      : element.className == "ustensils-li disabled"
      ? (div.style.backgroundColor = "#ed6454")
      : element.className == "ingredients-li disabled"
      ? (div.style.backgroundColor = "#3282f7")
      : "";
  });
}

function searchTags(recipes) {
  console.log(tagsClicked);

  const result = recipes.filter((recipe) => {
    return tagsClicked.every((array) => {
      const tagLow = array.textContent.toLowerCase();

      return (
        recipe.ingredients.find((ingredients) => {
          return ingredients.ingredient.toLowerCase().includes(tagLow);
        }) ||
        recipe.appliance.toLowerCase().includes(tagLow) ||
        recipe.ustensils.find((ustensil) => {
          return ustensil.toLowerCase().includes(tagLow);
        })
      );
    });
  });

  displayRecipes(result);
  // allTags(result);
}
