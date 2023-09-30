const BASE_URL = 'http://localhost:3000';

async function getMovie() {
    try {
        const movie = await fetch(`${BASE_URL}/movies`, options)
        const parcedMovie = await movie.json();
        return parcedMovie
    } catch (error) {
        console.log(error);
    }
};

async function getMoviesById(id) {
    try {
        const movie = await fetch(`${BASE_URL}/movies/${id}`)
        const parcedMovie = await movie.json();
        return parcedMovie
    } catch (error) {
        console.log(error);
    }
}