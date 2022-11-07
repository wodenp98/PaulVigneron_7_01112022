function recipeFactory(data) {
  const {
    appliance,
    description,
    id,
    ingredients,
    name,
    servings,
    time,
    ustensils,
  } = data;

  function getRecipeCardDOM() {
    const article = document.createElement("article");
    article.classList.add("cards");

    article.innerHTML = `<div class="cards-bg"></div>
                                <div class="cards-container">
                                    <div class="cards-title">
                                        <h2 class="cards-dishes">${name}</h2>
                                        <div class="cards-duration">
                                            <i class="fa-regular fa-clock"></i>
                                            <p class="cards-time">${time} min</p>
                                        </div>
                                    </div>
                                    <div class="cards-description">
                                        <ul class="cards-list">
                                        ${ingredients
                                          .map((ingredient) => {
                                            if (ingredient.unit === "grammes") {
                                              return `<li>
                                                      <span class="list-span">${ingredient.ingredient}:</span> ${ingredient.quantity}g
                                                    </li>`;
                                            } else if (
                                              ingredient.unit === undefined ||
                                              ingredient.quantity === undefined
                                            ) {
                                              return `<li>
                                                      <span class="list-span">${
                                                        ingredient.ingredient
                                                      }:</span> ${
                                                ingredient.quantity
                                                  ? ingredient.quantity
                                                  : ""
                                              } ${
                                                ingredient.unit
                                                  ? ingredient.unit
                                                  : ""
                                              }
                                                    </li>`;
                                            } else {
                                              return `<li>
                                                      <span class="list-span">${ingredient.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}
                                                    </li>`;
                                            }
                                          })
                                          .join("")}
                                        </ul>
                                        <div class="cards-details">${description}</div>
                                    </div>
                            </div>`;

    return article;
  }

  return {
    appliance,
    description,
    id,
    ingredients,
    name,
    servings,
    time,
    ustensils,
    getRecipeCardDOM,
  };
}
