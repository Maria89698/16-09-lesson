const BASE_URL = 'http://localhost:3000';

async function createMovie() {
    const options = {
        method: 'POST',
        headers: {'Content-type':"application/json"},
        body: JSON.stringify(newMovie)
    };

    try {
        const result = await fetch(`${BASE_URL}/movies`, options);
        const parcedMovie = await result.json();
        return parcedMovie
    } catch (error) {
        console.log(error);
    }
};