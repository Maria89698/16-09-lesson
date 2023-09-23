const BASE_URL = 'http://localhost:3000';
const update = {

};

function updateMovieById(id, update) {
    const options = {
        method: "PATCH",
        
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(update),
    }
    return fetch(`${BASE_URL}/movies/${id}`, options)
};

updateMovieById(1, {
    "title": "New JS",
    "director": "Me"
}).then(res => console.log(res))