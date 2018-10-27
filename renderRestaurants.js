
function renderRestaurants(restaurants) {

    let myResturantString = ''

    for (let i = 0; i < restaurants.length; i++) {
        myResturantString = myResturantString + `
                                                        <h1>${restaurants[i].name}</h1>
                                                        <h4>${restaurants[i].type}</h4>
                                                        <h2>${restaurants[i].priceRating}</h2>
                                                    </div>
                                                </div>
                                                </div>
                                                </div>
                                            `
    }


    return `<div class="container">
            <div class="row">
            <div class="col-sm">` + myResturantString
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}