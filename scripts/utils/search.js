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

  let array = [];

  for (let index = 0; index < inputDropdown.length; index++) {
    const input = inputDropdown[index];

    input.addEventListener("keyup", () => {
      const inputField = input.value.toLowerCase();

      for (let j = 0; j < recipes.length; j++) {
        let allRecipes = recipes[j];

        for (let k = 0; k < allRecipes.ingredients.length; k++) {
          const element = allRecipes.ingredients[k].ingredient
            .toLowerCase()
            .includes(inputField);
          // return element.ingredient.toLowerCase().includes(inputField);
        }
        displayRecipes(allRecipes);

        // function ustensil() {
        //   for (let k = 0; k < allRecipes.ustensils.length; k++) {
        //     const element = allRecipes.ustensils[k];
        //     return element.toLowerCase().includes(inputField);
        //   }
        // }

        // const appliances = allRecipes.appliance
        //   .toLowerCase()
        //   .includes(inputField);

        // if (ingredient() || ustensil() || appliances) {
        //   array.push(allRecipes);
        //   console.log(array);
        // }
      }
      // } else {
      //   allTags(recipes);
      //   displayRecipes(recipes);
    });
  }
}
