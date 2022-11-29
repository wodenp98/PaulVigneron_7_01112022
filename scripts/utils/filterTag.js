function ingredientsFilter(recipes) {
  // modif
  const ingredientsMap = recipes.map((recipe) => recipe.ingredients);
  let array = [];

  ingredientsMap.forEach((item) => {
    item.forEach((recipe) => {
      array.push(recipe.ingredient.toLowerCase());
    });
  });
  return [...new Set(array)];
}

function appliancesFilter(recipes) {
  // modif
  const appliancesMap = recipes.map((recipe) => recipe.appliance);

  return [...new Set(appliancesMap)];
}

function ustensilsFilter(recipes) {
  // modif
  const ustensilsMap = recipes.map((recipe) => recipe.ustensils);
  let array = [];

  ustensilsMap.forEach((item) => {
    item.forEach((ustensil) => {
      array.push(ustensil.toLowerCase());
    });
  });

  return [...new Set(array)];
}

function globalFilter(recipes) {
  ingredientsFilter(recipes);
  appliancesFilter(recipes);
  ustensilsFilter(recipes);
}
