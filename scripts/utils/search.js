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
