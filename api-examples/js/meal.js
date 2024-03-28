const loadFood = (text) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
};

const displayMeals = (meals) => {
    const mealCon = document.getElementById('meal-con');
    mealCon.innerText = '';
    // console.log(meals)
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-detail">
                Detail
            </button>
            </div>
        </div>
        `;
        mealCon.appendChild(div)
    });
};

const searchMeal = () => {
    const searchText = document.getElementById('search-inp').value;
    // console.log(searchText);
    loadFood(searchText);
};
loadFood('');

// const loadMealDetail = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     console.log(url);
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayMealDe(data.meals[0]))
//     .catch(error => {
//         console.log(error);
//     })
// };

const loadMealDetail2 = async(mealId) => {
    try{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        const res = await fetch(url);
        const data = await res.json();
        displayMealDe(data.meals[0]);
    }
    catch(error){
        console.log(error);
    };
};

const displayMealDe = meal => {
    // console.log(meal);
    document.getElementById('meal-detailLabel').innerText = meal.strMeal;
    const mealDeImg = document.getElementById('meal-de-img');
    mealDeImg.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}">
        <p>${meal.strInstructions}</p>
        <p>Youtube link: ${meal.strYoutube}</p>
    `;
};

 