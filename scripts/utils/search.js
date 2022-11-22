function searchRecipes(recipes) {
  const searchField = document.getElementById("search-input");
  const emptyRecipe = document.querySelector(".recipes");
  const errorMsg = document.querySelector(".search-error");

  searchField.addEventListener("keyup", (e) => {
    e.preventDefault();
    const input = searchField.value.toLowerCase();

    if (input.length >= 3) {
      const newRecipes = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(input) ||
          recipe.description.toLowerCase().includes(input) ||
          recipe.appliance.toLowerCase().includes(input) ||
          recipe.ingredients.find((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(input)
          ) ||
          recipe.ustensils.find((ustensil) =>
            ustensil.toLowerCase().includes(input)
          )
        );
      });

      displayRecipes(newRecipes);
      searchTag(newRecipes);
    } else {
      displayRecipes(recipes);
      searchTag(recipes);
    }

    if (emptyRecipe.childNodes.length === 0) {
      errorMsg.style.display = "block";
    } else {
      errorMsg.style.display = "none";
    }
  });
}

function searchTag(recipes) {
  // on récupère les tags
  const tagSpan = document.querySelectorAll(".tag-span");

  // on créé un tableau de tags pour pouvoir lui passer une fonction
  let arrays = Array.from(tagSpan);

  const result = recipes.filter((recipe) => {
    //on va every notre array de tag pour tester l'ensemble des éléments du tableau
    return arrays.every((array) => {
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
  globalTags(result);
}

function searchInput(recipes) {
  const inputDropdown = document.querySelectorAll(
    "#appliances-input, #ingredients-input, #ustensils-input"
  );
  inputDropdown.forEach((input) => {
    input.addEventListener("keyup", () => {
      const inputField = input.value.toLowerCase();

      const newRecipes = recipes.filter((recipe) => {
        return (
          recipe.appliance.toLowerCase().includes(inputField) ||
          recipe.ingredients.find((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(inputField)
          ) ||
          recipe.ustensils.find((ustensil) =>
            ustensil.toLowerCase().includes(inputField)
          )
        );
      });

      displayRecipes(newRecipes);
      globalTags(newRecipes);
    });
  });
}
