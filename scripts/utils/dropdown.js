function closeDropdown(type) {
  const allDropDown = Array.from(
    document.querySelectorAll(
      ".ingredients-container, .appliances-container, .ustensils-container"
    )
  );
  const indexArr = allDropDown.indexOf(type.parentElement);
  allDropDown.splice(indexArr, 1);

  for (let index = 0; index < allDropDown.length; index++) {
    let dropdown = allDropDown[index];
    dropdown.nextElementSibling.style.display = "none";
    dropdown.children[1].classList.remove("arrow-rotation");
  }
}

function factoryListener() {
  const chevrons = document.querySelectorAll(".fa-chevron-down");
  for (let i = 0; i < chevrons.length; i++) {
    const item = chevrons[i];

    let type = item.parentElement.children[0];

    item.addEventListener("click", () => {
      closeDropdown(type);
      let dropdownDisplay = item.parentElement.nextElementSibling;
      let rotateArrow = item.parentElement.childNodes[3];

      if (dropdownDisplay.style.display === "block") {
        dropdownDisplay.style.display = "none";
        rotateArrow.classList.remove("arrow-rotation");
      } else {
        dropdownDisplay.style.display = "block";
        rotateArrow.classList.add("arrow-rotation");
      }
    });
  }
}
