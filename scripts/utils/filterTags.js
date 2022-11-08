function ingredientsFilter(recipes) {
  const ingredientsMap = recipes.map((recipe) => recipe.ingredients);
  let array = [];

  ingredientsMap.forEach((item) => {
    item.forEach((recipe) => {
      const arrayLower = recipe.ingredient.toLowerCase();
      array.push(arrayLower);
    });
  });
  const arrayUnduplicated = array.filter(
    (item, index) => array.indexOf(item) === index
  );

  return arrayUnduplicated;
}

function appliancesFilter(recipes) {
  const appliancesMap = recipes.map((recipe) => recipe.appliance);

  const arrayUnduplicated = appliancesMap.filter(
    (item, index) => appliancesMap.indexOf(item) === index
  );

  return arrayUnduplicated;
}

function ustensilsFilter(recipes) {
  const ustensilsMap = recipes.map((recipe) => recipe.ustensils);
  let array = [];

  ustensilsMap.forEach((item) => {
    item.forEach((ustensil) => {
      const arrayLower = ustensil.toLowerCase();
      array.push(arrayLower);
    });
  });
  const arrayUnduplicated = array.filter(
    (item, index) => array.indexOf(item) === index
  );

  return arrayUnduplicated;
}

function globalFilter(recipes) {
  ingredientsFilter(recipes);
  appliancesFilter(recipes);
  ustensilsFilter(recipes);
}
