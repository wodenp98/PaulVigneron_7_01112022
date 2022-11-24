const ingredientsSection = document.getElementById("ingredients-list");
const ustensilsSection = document.getElementById("ustensils-list");
const appliancesSection = document.getElementById("appliances-list");

let ingredientsArr = [];
let ustensilsArr = [];
let appliancesArr = [];

function ingredientsFilter(recipes) {
  for (let i = 0; i < recipes.length; i++) {
    const test = recipes[i].ingredients;

    for (let j = 0; j < test.length; j++) {
      const element = test[j].ingredient.toLowerCase();
      ingredientsArr.push(element);
    }
    ingredientsArr = [...new Set(ingredientsArr)];
  }
}
function ustensilsFilter(recipes) {
  for (let i = 0; i < recipes.length; i++) {
    const allRecipes = recipes[i];

    for (let j = 0; j < allRecipes.ustensils.length; j++) {
      const ustensils = allRecipes.ustensils[j];
      ustensilsArr.push(ustensils.toLowerCase());
    }
    ustensilsArr = [...new Set(ustensilsArr)];
  }
}

function appliancesFilter(recipes) {
  for (let i = 0; i < recipes.length; i++) {
    const allRecipes = recipes[i];
    appliancesArr.push(allRecipes.appliance.toLowerCase());
    appliancesArr = [...new Set(appliancesArr)];
  }
}

function displayTag(recipes) {
  ingredientsFilter(recipes);
  ustensilsFilter(recipes);
  appliancesFilter(recipes);

  ingredientsSection.innerHTML = "";
  ustensilsSection.innerHTML = "";
  appliancesSection.innerHTML = "";

  for (let i = 0; i < ingredientsArr.length; i++) {
    const element = ingredientsArr[i];
    const li = document.createElement("li");
    li.classList.add("ingredients-li");
    li.innerHTML = `${element}`;
    ingredientsSection.appendChild(li);
  }

  for (let j = 0; j < ustensilsArr.length; j++) {
    const element = ustensilsArr[j];
    const li = document.createElement("li");
    li.classList.add("ustensils-li");
    li.innerHTML = `${element}`;
    ustensilsSection.appendChild(li);
  }

  for (let k = 0; k < appliancesArr.length; k++) {
    const element = appliancesArr[k];
    const li = document.createElement("li");
    li.classList.add("appliances-li");
    li.innerHTML = `${element}`;
    appliancesSection.appendChild(li);
  }
}

// filtrer les arrays en fonction du résultat de la search bar
