const ingredientsSection = document.getElementById("ingredients-list");
const appliancesSection = document.getElementById("appliances-list");
const ustensilsSection = document.getElementById("ustensils-list");
let tagsSelected = [];

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

function filterTag(recipes) {
  const li = document.querySelectorAll(
    ".appliances-li, .ustensils-li, .ingredients-li"
  );
  const tagsArray = Array.from(li);

  tagsArray.map((item) =>
    item.addEventListener("click", () => {
      let className = item.className;
      let text = item.innerText;
      tagsSelected.push({ item, className, text });
      displayTag(tagsSelected);
      searchTag(recipes);
      deleteCross(recipes);
    })
  );
}

function displayTag(tagsSelected) {
  const tagsContainer = document.querySelector(".tags");
  const div = document.createElement("div");

  tagsSelected.forEach((element) => {
    div.innerHTML = `<span class="tag-span">${element.text}</span>
    <i class="fa-regular fa-circle-xmark delete-cross"></i>
      `;

    div.classList.add("tags-container");
    tagsContainer.appendChild(div);

    element.className == "appliances-li"
      ? (div.style.backgroundColor = "#68d9a4")
      : element.className == "ustensils-li"
      ? (div.style.backgroundColor = "#ed6454")
      : "";
  });
}

function deleteCross(recipes) {
  const cross = document.querySelectorAll(".delete-cross");
  const keyTag = document.querySelectorAll(".tag-span");
  let array = Array.from(keyTag);

  for (let i = 0; i < cross.length; i++) {
    const tagDeleted = cross[i];

    tagDeleted.addEventListener("click", () => {
      let selectValue = tagDeleted.parentNode.firstChild;
      selectValue.parentElement.remove();
      let myIndex = array.indexOf(selectValue);

      if (myIndex !== -1) {
        array.splice(myIndex, 1);
        tagsSelected.splice(myIndex, 1);
      }
      const test = tagsSelected.filter((item) => {
        console.log(item.text);
      });
      console.log(recipes);
    });
  }
}

function globalTags(recipes) {
  ingredientsFactory(recipes);
  appliancesFactory(recipes);
  ustensilsFactory(recipes);
  filterTag(recipes);
  // deleteCross(recipes);
}
