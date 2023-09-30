const BASE_URL = 'http://localhost:3000';

async function deleteMovie(id) {
    const options = {
        method: "DELETE",
        
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const movie = await fetch(`${BASE_URL}/movies/${id}`, options);
        const parcedMovie = await movie.json();
        return parcedMovie
    } catch (error) {
        console.log(error);
    }
    
};
deleteMovie(15).then(res => console.log(res));