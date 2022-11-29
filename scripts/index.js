let recipes = [];

async function getRecipes() {
  try {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.log(error);
  }
}

async function displayRecipes(recipes) {
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML = "";

  for (let index = 0; index < recipes.length; index++) {
    const element = recipes[index];
    const recipeModel = recipeFactory(element);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
  }
}

async function init() {
  recipes = await getRecipes();
  displayRecipes(recipes);
  factoryListener();
  globalFilter(recipes);
  allTags(recipes);
  searchBar(recipes);
  searchTag(recipes);
  searchSelectInput(recipes);
}

init();
