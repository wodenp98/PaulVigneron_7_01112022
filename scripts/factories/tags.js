function ingredientsFactory(recipes) {
  const ingredientsSection = document.getElementById("ingredients-display");
  ingredientsSection.innerHTML = "";

  const arrayFiltered = ingredientsFilter(recipes);
  const ingredientsUl = document.createElement("ul");

  arrayFiltered.forEach((item) => {
    const ingredientsLi = document.createElement("li");
    ingredientsLi.textContent = `${item}`;
    ingredientsUl.appendChild(ingredientsLi);
  });
  ingredientsUl.style.display = "none";
  ingredientsSection.appendChild(ingredientsUl);
}

function appliancesFactory(recipes) {
  const appliancesSection = document.getElementById("appliances-display");
  //   appliancesSection.innerHTML = "";

  const arrayFiltered = appliancesFilter(recipes);
  const appliancesUl = document.querySelector(".appliances-list");

  arrayFiltered.forEach((item) => {
    const appliancesLi = document.createElement("li");
    appliancesLi.textContent = `${item}`;
    appliancesUl.appendChild(appliancesLi);
  });

  appliancesUl.style.display = "none";
}

function ustensilsFactory(recipes) {
  const ustensilsSection = document.getElementById("ustensils-display");
  //   appliancesSection.innerHTML = "";

  const arrayFiltered = ustensilsFilter(recipes);
  const ustensilsUl = document.querySelector(".ustensils-list");

  arrayFiltered.forEach((item) => {
    const ustensilsLi = document.createElement("li");
    ustensilsLi.textContent = `${item}`;
    ustensilsUl.appendChild(ustensilsLi);
  });

  ustensilsUl.style.display = "none";
}
