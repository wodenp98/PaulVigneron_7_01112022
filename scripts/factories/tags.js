const ingredientsSection = document.getElementById("ingredients-list");
const ustensilsSection = document.getElementById("ustensils-list");
const appliancesSection = document.getElementById("appliances-list");

function ingredientsFilter(recipes) {
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
  const appliancesMap = recipes.map((recipe) => recipe.appliance);

  return [...new Set(appliancesMap)];
}

function ustensilsFilter(recipes) {
  const ustensilsMap = recipes.map((recipe) => recipe.ustensils);
  let array = [];

  ustensilsMap.forEach((item) => {
    item.forEach((ustensil) => {
      array.push(ustensil.toLowerCase());
    });
  });

  return [...new Set(array)];
}

function appliancesFactory(recipes) {
  appliancesSection.innerHTML = "";

  const arrayFiltered = appliancesFilter(recipes);

  arrayFiltered.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("appliances-li");
    li.innerHTML = `${item}`;
    appliancesSection.appendChild(li);
  });
}

function ustensilsFactory(recipes) {
  ustensilsSection.innerHTML = "";

  const arrayFiltered = ustensilsFilter(recipes);

  arrayFiltered.forEach((item) => {
    // console.log(item);
    const li = document.createElement("li");
    li.classList.add("ustensils-li");
    li.innerHTML = `${item}`;
    ustensilsSection.appendChild(li);
  });
}

function ingredientsFactory(recipes) {
  ingredientsSection.innerHTML = "";

  const arrayFiltered = ingredientsFilter(recipes);

  arrayFiltered.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("ingredients-li");
    li.innerHTML = `${item}`;
    ingredientsSection.appendChild(li);
  });
}

function allTags(recipes) {
  appliancesFactory(recipes);
  ustensilsFactory(recipes);
  ingredientsFactory(recipes);
}
