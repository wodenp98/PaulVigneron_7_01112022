const ingredientsSection = document.getElementById("ingredients-list");
const appliancesSection = document.getElementById("appliances-list");
const ustensilsSection = document.getElementById("ustensils-list");
let tagSelected = [];

function appliancesFactory(recipes) {
  appliancesSection.innerHTML = "";

  const arrayFiltered = appliancesFilter(recipes);

  for (let index = 0; index < arrayFiltered.length; index++) {
    const element = arrayFiltered[index];
    const li = document.createElement("li");
    li.classList.add("appliances-li");
    li.innerHTML = `${element}`;
    appliancesSection.appendChild(li);
  }
}

function ustensilsFactory(recipes) {
  ustensilsSection.innerHTML = "";

  const arrayFiltered = ustensilsFilter(recipes);
  for (let index = 0; index < arrayFiltered.length; index++) {
    const element = arrayFiltered[index];
    const li = document.createElement("li");
    li.classList.add("ustensils-li");
    li.innerHTML = `${element}`;
    ustensilsSection.appendChild(li);
  }
}

function ingredientsFactory(recipes) {
  ingredientsSection.innerHTML = "";

  const arrayFiltered = ingredientsFilter(recipes);
  for (let index = 0; index < arrayFiltered.length; index++) {
    const element = arrayFiltered[index];
    const li = document.createElement("li");
    li.classList.add("ingredients-li");
    li.innerHTML = `${element}`;
    ingredientsSection.appendChild(li);
  }
}

function filterTag(recipes) {
  const textTag = document.querySelectorAll(
    ".appliances-li, .ustensils-li, .ingredients-li"
  );

  for (let index = 0; index < textTag.length; index++) {
    let text = textTag[index];
    text.addEventListener("click", () => {
      tagSelected.push(text);
      displayTags(tagSelected);
      searchTag(recipes);
    });
  }
}

function displayTags(tagSelected) {
  const tags = document.querySelector(".tags");
  tags.innerHTML = "";

  tagSelected.forEach((element, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<span class="tag-span" data-id="${index}">${element.innerText}</span>
    <i class="fa-regular fa-circle-xmark delete-cross"></i>
      `;

    div.classList.add("tags-container");
    tags.appendChild(div);

    element.className == "appliances-li"
      ? (div.style.backgroundColor = "#68d9a4")
      : element.className == "ustensils-li"
      ? (div.style.backgroundColor = "#ed6454")
      : element.className == "ingredients-li"
      ? (div.style.backgroundColor = "#3282f7")
      : "";

    deleteCross(index);
  });
}

function deleteCross(index) {
  const tagSpan = document.querySelector(
    `.tag-span[data-id='${index}'] ~ .delete-cross`
  );

  tagSpan.addEventListener("click", () => {
    if (index !== -1) {
      tagSelected.splice(index, 1);
      displayTags(tagSelected);
    }
    searchTag(recipes);
  });
}

function allTags(recipes) {
  ingredientsFactory(recipes);
  appliancesFactory(recipes);
  ustensilsFactory(recipes);
  filterTag(recipes);
}
