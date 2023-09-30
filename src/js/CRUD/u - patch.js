const BASE_URL = 'http://localhost:3000';
const update = {

};

async function updateMovieById(id, update) {
    const options = {
        method: "PATCH",
        
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(update),
    }

    try {
        const movie = await fetch(`${BASE_URL}/movies/${id}`, options)
        const parcedMovie = await movie.json()
        return parcedMovie
    } catch (error) {
        console.log(error);
    }
    
};

updateMovieById(1, {
    "title": "New JS",
    "director": "Me"
}).then(res => console.log(res));