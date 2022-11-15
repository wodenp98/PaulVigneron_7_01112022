const ingredientsSection = document.getElementById("ingredients-list");
const appliancesSection = document.getElementById("appliances-list");
const ustensilsSection = document.getElementById("ustensils-list");

// const types = {
//   ingredients: {
//     li: "ingredients-li",
//     section: ingredientsSection,
//   },
//   appliances: {
//     li: "appliances-li",
//     section: appliancesSection,
//   },
//   ustensils: {
//     li: "ustensils-li",
//     section: ustensilsSection,
//   },
// };

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

function factoryListener() {
  const chevrons = document.querySelectorAll(".fa-chevron-down");
  chevrons.forEach((chevron) => {
    chevron.addEventListener("click", () => {
      let dropdownDisplay = chevron.parentElement.nextElementSibling;
      // console.log(dropdownDisplay);
      if (dropdownDisplay.style.display === "block") {
        dropdownDisplay.style.display = "none";
      } else {
        dropdownDisplay.style.display = "block";
      }
    });
  });
}

function filterTag(tag) {
  const tagsContainer = document.querySelector(".tags");
  const div = document.createElement("div");

  div.innerHTML = `<span>${tag.textContent}</span>
                  <i class="fa-regular fa-circle-xmark" onClick="deleteCross(this)"></i>
                          `;

  tagsContainer.appendChild(div);
}

function deleteCross(element) {
  element.parentElement.remove();
}

function findTag() {
  const allTags = document.querySelectorAll(
    ".ingredients-li, .appliances-li, .ustensils-li"
  );

  allTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      filterTag(tag);
    });
  });
}

function globalTags(recipes) {
  ingredientsFactory(recipes);
  appliancesFactory(recipes);
  ustensilsFactory(recipes);
  findTag();
  factoryListener();
}
