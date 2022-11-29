function ingredientsFilter(recipes) {
  let array = [];
  for (let index = 0; index < recipes.length; index++) {
    let element = recipes[index].ingredients;

    for (let j = 0; j < element.length; j++) {
      let ingredients = element[j];
      array.push(ingredients.ingredient.toLowerCase());
    }
  }
  return [...new Set(array)];
}

function appliancesFilter(recipes) {
  let array = [];

  for (let index = 0; index < recipes.length; index++) {
    let element = recipes[index].appliance;
    array.push(element.toLowerCase());
  }

  return [...new Set(array)];
}

function ustensilsFilter(recipes) {
  let array = [];
  for (let index = 0; index < recipes.length; index++) {
    let element = recipes[index].ustensils;

    for (let j = 0; j < element.length; j++) {
      let ustensils = element[j];
      array.push(ustensils.toLowerCase());
    }
  }
  return [...new Set(array)];
}

function globalFilter(recipes) {
  ingredientsFilter(recipes);
  appliancesFilter(recipes);
  ustensilsFilter(recipes);
}
