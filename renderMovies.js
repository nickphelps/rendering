
function renderMovies(movies) {
    let myMovieString = ''
    for (let i = 0;i < movies.length; i++) {
        myMovieString = myMovieString + `
                                            <div class="container">
                                            <div class="row">
                                            <div class="col">
                                            <img src ="${movies[i].poster}">
                                            </div>
                                            <div class="col">
                                                <div class="card" style="width: 18rem;">
                                                <div class="card-body">
                                                <h5 class="card-title">${movies[i].title}</h5>
                                                <h4>${movies[i].year}</h4>
                                                <h2>IMBD</h2>
                                                <h3>${movies[i].imdbRating}</h3>
                                                <h2>Rotten Tomatoes</h2>
                                                <h3>${movies[i].rottenTomatoesRating}</h3>
                                                </div>
                                            </div>
                                        </div>
                                            </div>
                                            </div> `
    }
    
    return myMovieString
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}