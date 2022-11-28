function searchBar(recipes) {
  const searchBarInput = document.getElementById("search-input");
  const emptyRecipe = document.querySelector(".recipes");
  const errorMsg = document.querySelector(".search-error");
  let array = [];

  searchBarInput.addEventListener("keyup", () => {
    const input = searchBarInput.value.toLowerCase();

    if (input.length >= 3) {
      for (let i = 0; i < recipes.length; i++) {
        let allRecipes = recipes[i];

        function findIngredients() {
          for (let j = 0; j < allRecipes.ingredients.length; j++) {
            const ingredients = allRecipes.ingredients[j];
            return ingredients.ingredient.toLowerCase().includes(input);
          }
        }
        function findUstensils() {
          for (let j = 0; j < allRecipes.ustensils.length; i++) {
            const ustensils = allRecipes.ustensils[j];
            return ustensils.toLowerCase().includes(input);
          }
        }
        const findName = allRecipes.name.toLowerCase().includes(input);
        const findAppliances = allRecipes.appliance
          .toLowerCase()
          .includes(input);
        const findDescription = allRecipes.description
          .toLowerCase()
          .includes(input);

        if (
          findIngredients() ||
          findUstensils() ||
          findName ||
          findAppliances ||
          findDescription
        ) {
          array.push(allRecipes);
          console.log(array);
        }
      }
      displayRecipes(array);
      allTags(array);
    } else {
      displayRecipes(recipes);
      allTags(recipes);
    }

    if (emptyRecipe.childNodes.length === 0) {
      errorMsg.style.display = "block";
    } else {
      errorMsg.style.display = "none";
    }
  });
}

function searchSelectInput(recipes) {
  const inputDropdown = document.querySelectorAll(
    "#appliances-input, #ingredients-input, #ustensils-input"
  );

  for (let index = 0; index < inputDropdown.length; index++) {
    const input = inputDropdown[index];

    input.addEventListener("keyup", () => {
      const inputField = input.value.toLowerCase();
      const results = [];
      for (let i = 0; i < recipes.length; i++) {
        let allRecipes = recipes[i];

        if (input.id === "ingredients-input") {
          for (let j = 0; j < allRecipes.ingredients.length; j++) {
            const ingredient = allRecipes.ingredients[j].ingredient;
            console.log(ingredient);
            if (ingredient.toLowerCase().includes(inputField.toLowerCase())) {
              results.push(allRecipes);
              break;
            }
          }
          allTags(results);
        }

        // if (recipe.name.toLowerCase().includes(inputField.toLowerCase())) {
        //   results.push(recipe);
        //   // continue;
        // } else if (
        //   recipe.description.toLowerCase().includes(inputField.toLowerCase())
        // ) {
        //   results.push(recipe);
        //   // continue;
        // }
        // for (let i = 0; i < recipe.ingredients.length; i++) {
        //   const ingredient = recipe.ingredients[i].ingredient;
        //   if (ingredient.toLowerCase().includes(inputField.toLowerCase())) {
        //     results.push(recipe);
        //     // break;
        //   }
        // }
      }
      // console.log(results);
    });
  }
}
