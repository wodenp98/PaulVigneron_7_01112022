async function getRecipes() {
  try {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    return { recipes: data.recipes };
  } catch (error) {
    console.log(error);
  }
}

async function displayRecipes(recipes) {
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
  });
}

async function init() {
  const { recipes } = await getRecipes();
  displayRecipes(recipes);
  globalFilter(recipes);
  globalTags(recipes);
  searchRecipes(recipes);
}

init();
