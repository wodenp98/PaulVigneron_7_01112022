const ingredientsSection = document.getElementById("ingredients-list");
const appliancesSection = document.getElementById("appliances-list");
const ustensilsSection = document.getElementById("ustensils-list");

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

function deleteCross(element) {
  element.parentElement.remove();
}

function globalTags(recipes) {
  ingredientsFactory(recipes);
  appliancesFactory(recipes);
  ustensilsFactory(recipes);
  searchTag(recipes);
}
