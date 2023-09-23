const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд повернув якусь нісенітницю }';

function checkValid(obj) {
    try {
        return JSON.parse(obj)
    } catch (error) {
        console.log(invalidJSON);
    }
}