const BASE_URL = 'http://localhost:3000';

function getFilms(params) {
    fetch(`${BASE_URL}/films`)
    .then(res=>res.json())
}
function name(params) {
    
}