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
      let array = [];

      for (let i = 0; i < recipes.length; i++) {
        let allRecipes = recipes[i];

        function findIngredients() {
          for (let j = 0; j < allRecipes.ingredients.length; j++) {
            const ingredients =
              allRecipes.ingredients[j].ingredient.toLowerCase();
            if (ingredients.includes(inputField)) {
              return array.push(allRecipes);
            }
          }
        }

        function findUstensils() {
          for (let j = 0; j < allRecipes.ustensils.length; j++) {
            const ustensils = allRecipes.ustensils[j].toLowerCase();
            if (ustensils.includes(inputField)) {
              return array.push(allRecipes);
            }
          }
        }

        function findAppliances() {
          const appliances = allRecipes.appliance.toLowerCase();

          if (appliances.includes(inputField)) {
            return array.push(allRecipes);
          }
        }

        if (input.id === "ingredients-input") {
          findIngredients();
          allTags(array);
          displayRecipes(array);
        } else if (input.id === "appliances-input") {
          findAppliances();
          allTags(array);
          displayRecipes(array);
        } else {
          findUstensils();
          allTags(array);
          displayRecipes(array);
        }
      }
    });
  }
}

function searchTag(recipes) {
  const tagSpan = document.querySelectorAll(".tag-span");

  let arrays = Array.from(tagSpan);
  // modif
  const result = recipes.filter((recipe) => {
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
  allTags(result);
}
