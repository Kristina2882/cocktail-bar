
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import cocktailService from './cocktail-service';

//business
async function callRandom() {
 const response = await cocktailService.callRandom();
 if (response.drinks) {
    showCocktail(response);
 }
 else {
    printError("Smth went wrong o_O");
 }
}

async function seacrhCocktail(name) {
   const response = await cocktailService.seacrhCocktail(name);
   if (response.drinks) {
      console.log(response);
      showCocktail(response);
   }
   else {
      printError(`We don't have ${name} cocktail!`);
   }
}

async function seacrhCocktails(ingr) {
const response = await cocktailService.seacrhCocktails(ingr);
if (response.drinks) {
   printList(response, ingr);
}
   else {
      printError("We don't have cocktail with such an ingredient!");
   }
}

//ui
function showCocktail(response){
 document.querySelector("#drink").innerText = `${response.drinks[0].strDrink}`;
 document.querySelector("#pic").innerHTML = `<img src="${response.drinks[0].strDrinkThumb}" />`;
 
 const ingr = [
 `${response.drinks[0].strIngredient1} ${response.drinks[0].strMeasure1}`, `${response.drinks[0].strIngredient2} ${response.drinks[0].strMeasure2}`,
 `${response.drinks[0].strIngredient3} ${response.drinks[0].strMeasure3}`,`${response.drinks[0].strIngredient4} ${response.drinks[0].strMeasure4}`,
 `${response.drinks[0].strIngredient5} ${response.drinks[0].strMeasure5}`, `${response.drinks[0].strIngredient6} ${response.drinks[0].strMeasure6}`,
 `${response.drinks[0].strIngredient7} ${response.drinks[0].strMeasure7}`, `${response.drinks[0].strIngredient8} ${response.drinks[0].strMeasure8}`,
 `${response.drinks[0].strIngredient9} ${response.drinks[0].strMeasure9}`, `${response.drinks[0].strIngredient10} ${response.drinks[0].strMeasure10}`,
 `${response.drinks[0].strIngredient11} ${response.drinks[0].strMeasure11}`, `${response.drinks[0].strIngredient12} ${response.drinks[0].strMeasure12}`,
 `${response.drinks[0].strIngredient13} ${response.drinks[0].strMeasure13}`, `${response.drinks[0].strIngredient14} ${response.drinks[0].strMeasure14}`,
 `${response.drinks[0].strIngredient15} ${response.drinks[0].strMeasure15}`
];

 let output = "";
 ingr.forEach(function(ing){
   
   if ((ing !== "null null") && (ing !== "null ")) {
   output += "🔸" + ing + "</br>";
   }

   return output;
 });

 let correctedOutput = output.replaceAll("null", " ");
 document.querySelector("#drinkRecipe").innerHTML = `</br></br><h4><strong>Ingridients</strong> </br> </br> ${correctedOutput}</h4> </br> 
 <h4>${response.drinks[0].strInstructions}</h4>`;

}

function printError(errorMessage) {
    document.querySelector("#drink").innerText = `Ooops! ${errorMessage}`;
   }

function printList(response, ingr) {
   const drLength = response.drinks.length;
   console.log(drLength);
   let output = "";
   let outputImg = ""
   for (let i = 0; i < drLength; i++) {

      output += `<h5>${response.drinks[i].strDrink}</h5> <img src="${response.drinks[i].strDrinkThumb}/preview"/> `;
   }
   document.querySelector("#drink").innerHTML = `The cocktails with ${ingr}: </br></br> ${output}`;
   document.querySelector("#drinkRecipe").innerHTML = `<img src="https://www.thecocktaildb.com/images/ingredients/${ingr}.png" />`;
}   

   function handleFormSearchByName(event) {
      event.preventDefault();

      if (document.querySelector("#drink").innerText !== "") {
        document.querySelector("#drink").innerText = "";
      }

      document.querySelector("#drink").innerText = null;
      document.querySelector("#pic").innerText = null;
      document.querySelector("#drinkRecipe").innerHTML = null;

      const cName = document.querySelector("input#cName").value;
      document.querySelector("input#cName").value = null;
      if (cName === "") {
         printError("Please enter your cocktail!");
      }
      else {
      seacrhCocktail(cName);
      }
   }

   function handleFormSearchByIngr(event) {
      event.preventDefault();

      if (document.querySelector("#drink").innerText !== "") {
         document.querySelector("#drink").innerText = "";
       }

       document.querySelector("#drink").innerText = null;
       document.querySelector("#pic").innerText = null;
       document.querySelector("#drinkRecipe").innerHTML = null;

      const cIngr = document.querySelector("input#cIngr").value;
      document.querySelector("input#cIngr").value = null;

      if (cIngr === "") {
         printError("Please enter your ingredient!");
      }
      else {
      seacrhCocktails(cIngr);
      }
   }

window.addEventListener("load", function() {

    document.querySelector("#random").addEventListener("click", callRandom);
    document.querySelector("#searchByName").addEventListener("submit", handleFormSearchByName);
    document.querySelector("#searchByIngr").addEventListener("submit", handleFormSearchByIngr);
});