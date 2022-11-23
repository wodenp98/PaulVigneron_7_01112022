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

// find bug and it's done

function displayTag(tagsSelected) {
  const tagsContainer = document.querySelector(".tags");
  const div = document.createElement("div");

  tagsSelected.forEach((element) => {
    div.innerHTML = `<span class="tag-span">${element.spanText}</span>
    <i class="fa-regular fa-circle-xmark delete-cross"></i>
      `;

    div.classList.add("tags-container");
    tagsContainer.appendChild(div);

    element.className == "appliances-li"
      ? (div.style.backgroundColor = "#68d9a4")
      : element.className == "ustensils-li"
      ? (div.style.backgroundColor = "#ed6454")
      : element.className == "ingredients-li"
      ? (div.style.backgroundColor = "#3282f7")
      : "";
  });
}

function deleteCross(recipes) {
  const deleteTag = document.querySelectorAll(".delete-cross");
  for (let i = 0; i < deleteTag.length; i++) {
    const tagDeleted = deleteTag[i];

    tagDeleted.addEventListener("click", () => {
      const tagSpan = document.querySelectorAll(".tag-span");

      // on créé un tableau de tags pour pouvoir lui passer une fonction
      let array = Array.from(tagSpan);
      console.log(array);

      let selectValue = tagDeleted.parentNode.firstChild;
      console.log(selectValue);
      selectValue.parentElement.remove();
      let myIndex = array.indexOf(selectValue);
      console.log(myIndex);

      if (myIndex !== -1) {
        array.splice(myIndex, 1);
        console.log(array);
      }

      const result = recipes.filter((recipe) => {
        console.log(recipe);
        return array.every((filt) => {
          const filterText = filt.textContent.toLowerCase();

          return (
            recipe.ingredients.some((ingredients) => {
              return ingredients.ingredient.toLowerCase().includes(filterText);
            }) ||
            recipe.appliance.toLowerCase().includes(filterText) ||
            recipe.ustensils.some((ustensil) => {
              return ustensil.toLowerCase().includes(filterText);
            })
          );
        });
      });
      displayRecipes(result);
      searchTag(result);
    });
  }
}

function filterTag(recipes) {
  const textTag = document.querySelectorAll(
    ".appliances-li, .ustensils-li, .ingredients-li"
  );

  textTag.forEach((text) => {
    text.addEventListener("click", () => {
      let className = text.className;
      let spanText = text.innerText;
      tagsSelected.push({ className, spanText });

      displayTag(tagsSelected);
      searchTag(recipes);
      deleteCross(recipes);
    });
  });
}

function globalTags(recipes) {
  ingredientsFactory(recipes);
  appliancesFactory(recipes);
  ustensilsFactory(recipes);
  filterTag(recipes);
}
