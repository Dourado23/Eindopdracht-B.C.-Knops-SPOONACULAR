import axios from 'axios';


const urlParams = new URLSearchParams(window.location.search);


const id = urlParams.get('id');
console.log(id);

async function fetchRecipes(id) {
    const api = 'c4ecb97a40d44a819032cdf06feaec71';

    try {

        const result = await axios.get(`https://api.spoonacular.com/recipes/4632/card&apiKey=${api}`, {})


        headers: {
            'Content-Type';
            'application/json'
        }



        console.log(result.data, "data");


    } catch (e) {
        console.error(e);

    }
}

fetchRecipes(id);