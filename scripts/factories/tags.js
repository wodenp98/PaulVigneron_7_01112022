function ingredientsFactory(recipes) {
  const ingredientsSection = document.getElementById("ingredients-list");
  ingredientsSection.innerHTML = "";

  const arrayFiltered = ingredientsFilter(recipes);

  arrayFiltered.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("ingredients-li");
    li.innerHTML = `${item}`;
    ingredientsSection.appendChild(li);
  });
}

function appliancesFactory(recipes) {
  const appliancesSection = document.getElementById("appliances-list");
  appliancesSection.innerHTML = "";

  const arrayFiltered = appliancesFilter(recipes);

  arrayFiltered.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("ingredients-li");
    li.innerHTML = `${item}`;
    appliancesSection.appendChild(li);
  });
}

function ustensilsFactory(recipes) {
  const ustensilsSection = document.getElementById("ustensils-list");
  ustensilsSection.innerHTML = "";

  const arrayFiltered = ustensilsFilter(recipes);

  arrayFiltered.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("ingredients-li");
    li.innerHTML = `${item}`;
    ustensilsSection.appendChild(li);
  });
}

function factoryListener() {
  const chevrons = document.querySelectorAll(".fa-chevron-down");
  chevrons.forEach((chevron) => {
    chevron.addEventListener("click", () => {
      let dropdownDisplay = chevron.parentElement.nextElementSibling;
      console.log(dropdownDisplay);
      if (dropdownDisplay.style.display === "block") {
        dropdownDisplay.style.display = "none";
      } else {
        dropdownDisplay.style.display = "block";
      }
    });
  });
}

function globalTags(recipes) {
  ingredientsFactory(recipes);
  appliancesFactory(recipes);
  ustensilsFactory(recipes);
  factoryListener();
}
