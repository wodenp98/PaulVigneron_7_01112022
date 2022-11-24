function searchBar(recipes) {
  const searchBarInput = document.getElementById("search-input");
  const emptyRecipe = document.querySelector(".recipes");
  const errorMsg = document.querySelector(".search-error");

  searchBarInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    const input = searchBarInput.value.toLowerCase();
    let array = [];

    if (input.length >= 3) {
      for (let i = 0; i < recipes.length; i++) {
        let allRecipes = recipes[i];
        console.log(allRecipes);

        function findIngredients() {
          for (let j = 0; j < allRecipes.ingredients.length; i++) {
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
        }
      }
      console.log(array);
      displayRecipes(array);
    } else {
      displayRecipes(recipes);
    }

    if (emptyRecipe.childNodes.length === 0) {
      errorMsg.style.display = "block";
    } else {
      errorMsg.style.display = "none";
    }
  });
}
