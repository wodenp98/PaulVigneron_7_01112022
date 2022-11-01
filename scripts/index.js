async function getRecipes() {
  try {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getRecipes();
