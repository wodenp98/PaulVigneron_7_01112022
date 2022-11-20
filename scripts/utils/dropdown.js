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
