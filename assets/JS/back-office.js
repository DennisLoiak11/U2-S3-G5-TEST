const api = 'https://striveschool-api.herokuapp.com/api/product/';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTFiMmM1NmIzNjAwMTMzZmU1NjIiLCJpYXQiOjE2NzkwNDgwODEsImV4cCI6MTY4MDI1NzY4MX0.I7Wz464jVJbb2SZtNiBcDLqLl4_BQgiNdW4ciG1mrLY';
const auth = {
    headers: {
        'Autorization': `Bearer ${key}`,
    },
};

const Save = async (event) => {
    event.preventDefault();

    const newArt = {
        name: document.getElementById("name").value,
        brand: document.getElementById("brand").value,
        description: document.getElementById("descrizione").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("prezzo").value
    }
}