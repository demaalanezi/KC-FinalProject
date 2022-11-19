console.log("Script is running!");
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const recipeSectionDiv = document.querySelector("#recipe_section");
const inputField = document.querySelector("#search");
const submitButton = document.querySelector("#submitButton");
const recipeName = document.querySelector("#recipe-name");
const recipeImage = document.querySelector("#recipe-image");
const recipeLink = document.querySelector("#recipe-link");
const recipeCalories = document.querySelector("#recipe-calories");
const c1_highProtein = document.querySelector("#Check1");
const c2_lowCarb = document.querySelector("#Check2");
const c3_keto = document.querySelector("#Check3");
const c4_veget = document.querySelector("#Check4");
const c5_vegan = document.querySelector("#Check5");

function selectOnlyThis(id) {
  for (var i = 1; i <= 5; i++) {
    document.getElementById("Check" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

async function getRecipe(userInput) {
  const myKey = "dea80f07cf13d098706d5b4bc837e307";
  const appId = "614d20c6";
  let beginning = `https://api.edamam.com/api/recipes/v2?type=public&q=`;
  let end = `&app_id=${appId}&app_key=${myKey}`;

  for (let i = 0; i < userInput.length; i++) {
    beginning = beginning + userInput[i];
    if (i === userInput.length - 1) {
      break;
    }
    else {
      beginning = beginning + "%20";
    }
  }

  if (c1_highProtein.checked === true) {
    end = end + `&diet=high-protein`;
    console.log("end has been edited");
  }
  else if (c2_lowCarb.checked === true) {
    end = end + `&diet=low-carb`;
  }
  else if (c3_keto.checked === true) {
    end = end + `&health=keto-friendly`;
  }
  else if (c4_veget.checked === true) {
    end = end + `&health=vegetarian`;
  }
  else if (c5_vegan.checked === true) {
    end = end + `&health=vegan`;
  }

  console.log(beginning + end);
  const myQuery = beginning + end;
  console.log("myQuery:", myQuery);
  const response = await fetch(myQuery);
  console.log("Fetching 'confirmation email' from Edamam API to our query:", response);
  const myJson = await response.json();

  if (myJson.hits.length === 0) {
    alert("There are no recipes:( Try again!");
    return;
  }
  console.log("Response to our query/package recieved from Edamam API:", myJson);
  const recipe = myJson.hits[getRandomInt(myJson.hits.length)].recipe;
  recipeLink.innerHTML = `Recipe Link = <a href='${recipe.url}'>` + recipe.url + "</a>";
  recipeName.innerHTML = recipe.label;
  recipeImage.src = recipe.image;
  recipeCalories.innerHTML = `Calories = ${recipe.calories}`;
}

submitButton.addEventListener("click", async (e) => {
  console.log("Submit button clicked!");
  let userInput = inputField.value.split(" ");
  if (inputField.value == "" || inputField.value === null) {
    alert("Please enter at least one ingredient in the input box!");
  }
  else {
    getRecipe(userInput);
  }
});

const groceryListDiv = document.querySelector("#grocery-list");
const groceryInputField = document.querySelector("#grocery-input-field");
const groceryAddButton = document.querySelector("#add-grocery-button");

groceryInputField.addEventListener('change', (e) => {
  const newGroceryItem = groceryInputField.value;
  groceryListDiv.innerHTML = groceryListDiv.innerHTML + `<li>${newGroceryItem}</li>`;

  groceryInputField.value = "";
});