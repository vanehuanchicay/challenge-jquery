$(document).ready( function(){ //Ocultar Elemento
	$(".js-back").hide();

	$(function printNews(){ // Agregar contenido al elemento p
		$("p").append("NUEVAS RECETAS");
	})

	//Array
	function recipesArrays() { 
	 //Muestre las recetas
	 var arrayRecipes = [];
	 for (let i = 0; i < recipesArray.length; i++) {
	   arrayRecipes.push(recipesArray[i]);
	 }
	 return arrayRecipes;
	}
	recipesArrays();

	function renderHighlightedRecipes(arrayRecipesR) {

	 for (let i = 0; i < arrayRecipesR.length; i++) {
	   //Verificar en cada objeto del arreglo si tiene la propiedad ​ highlighted ​ en
	   //true.
	   if (arrayRecipesR[i].highlighted === true) {
	     renderRecipe(arrayRecipesR[i]);
	   }

	 }
	}
	renderHighlightedRecipes(recipesArrays());

	function renderRecipe(renderHighlightedRecipes) {
	 console.log(renderHighlightedRecipes);
	}

	//Agregando elementos dinámicos 
	function renderRecipe(recipe) {

		$(".list-recipes").append("<div> <span class='title-recipe'>" + recipe.title +  "</span>" + 
			"<span class='author-recipe'>" + recipe.source.name + "</span><img src='img/recipes/640x480/" + 
			recipe.name + ".jpg'></div>");
	};

	
});



//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
renderHighlightedRecipes(recipesArray);


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
