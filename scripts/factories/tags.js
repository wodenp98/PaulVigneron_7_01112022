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
    let type = chevron.parentElement.children[0];

    chevron.addEventListener("click", () => {
      closeDropdown(type);
      let dropdownDisplay = chevron.parentElement.nextElementSibling;
      let rotateArrow = chevron.parentElement.childNodes[3];

      if (dropdownDisplay.style.display === "block") {
        dropdownDisplay.style.display = "none";
        rotateArrow.classList.remove("arrow-rotation");
      } else {
        dropdownDisplay.style.display = "block";
        rotateArrow.classList.add("arrow-rotation");
      }
    });
  });
}

function closeDropdown(type) {
  const allDropDown = Array.from(
    document.querySelectorAll(
      ".ingredients-container, .appliances-container, .ustensils-container"
    )
  );
  const indexArr = allDropDown.indexOf(type.parentElement);
  allDropDown.splice(indexArr, 1);

  allDropDown.forEach((dropdown) => {
    dropdown.nextElementSibling.style.display = "none";
    dropdown.children[1].classList.remove("arrow-rotation");
  });
}

function filterTag(tag) {
  const tagsContainer = document.querySelector(".tags");
  const div = document.createElement("div");

  div.innerHTML = `<span class="tag-span">${tag.textContent}</span>
                  <i class="fa-regular fa-circle-xmark delete-cross" onClick="deleteCross(this)"></i>
                          `;
  div.classList.add("tags-container");
  tagsContainer.appendChild(div);

  tag.className == "appliances-li"
    ? (div.style.backgroundColor = "#68d9a4")
    : tag.className == "ustensils-li"
    ? (div.style.backgroundColor = "#ed6454")
    : "";
}

function findTag() {
  const allTags = document.querySelectorAll(
    ".ingredients-li, .appliances-li, .ustensils-li"
  );

  allTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const tagSpan = document.querySelectorAll(".tag-span");
      console.log(tagSpan);

      filterTag(tag);
    });
  });
}

function deleteCross(element) {
  element.parentElement.remove();
}

function globalTags(recipes) {
  ingredientsFactory(recipes);
  appliancesFactory(recipes);
  ustensilsFactory(recipes);
  findTag();
  factoryListener();
}
