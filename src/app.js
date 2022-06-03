import axios from 'axios';

console.log("Ça marche!");

const testButton = document.getElementById('test');
console.log(testButton, 'button')

const ingredientSearch = document.getElementById('search-ingredient');

ingredientSearch.addEventListener('click', userInput);

function userInput() {
    console.log('user-input');
    const searchRecipe = document.getElementById('recipe-search');
    fetchRecipes(searchRecipe.value);
    console.log(searchRecipe.value);

}

function createRecipeList(recipes) {
    const list = document.createElement('ul');
    list.classList.add('ul');
    recipes.map((recipe, index) => {
        const aTag = document.createElement('a');
        aTag.href = `pagina2.html?id=${recipe.id}`;
        console.log(aTag);
        const listItem = document.createElement('li');
        listItem.textContent = recipe.title;
        listItem.classList.add('recipe');
        aTag.appendChild(listItem);
        list.appendChild(aTag);
        //listItem.id = "chosen-recipe";
        const listImage = document.createElement('img');
        listImage.setAttribute('src', recipe.image);
        listImage.classList.add('recipeImage');
        listItem.appendChild(listImage);



    })
    window.document.body.appendChild(list);


};


async function fetchRecipes(ingredientName) {
    const api = 'c4ecb97a40d44a819032cdf06feaec71';
    console.log(ingredientName, "ingredientName");
    try {
        let ingredients;
        const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientName}&number=20&apiKey=${api}`, {})


        headers: {
            'Content-Type';
            'application/json'
        }

        createRecipeList(result.data);

        console.log(result.data, "data");


    } catch (e) {
        console.error(e);

    }
}