const api = 'https://striveschool-api.herokuapp.com/api/product/';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTFiMmM1NmIzNjAwMTMzZmU1NjIiLCJpYXQiOjE2NzkwNDgwODEsImV4cCI6MTY4MDI1NzY4MX0.I7Wz464jVJbb2SZtNiBcDLqLl4_BQgiNdW4ciG1mrLY';
const auth = {
    headers: {
        'Autorization': `Bearer ${key}`,
    },
};

const articles = document.querySelector('#articles');

const articlesId = new URLSearchParams(window.location.search).get('articlesId')

const addCard = async (elements) => {
    if (elements) {

        articles.innerHTML = '';

        for (const card of elements) {

            const column = document.createElement('div');
            column.className = 'col-12 col-md-6 col-lg-4';

            column.innerHTML =
                `<div class="card">
                <img src="${card.imageUrl}" class="card-img-top img-fluid p-3" alt="${card.description}">
                <div class="card-body">
                    <h5 class="card-title mt-auto">${card.name}</h5>
                    <p class="card-text">${card.description}</p>
                    <div class="d-flex justify-content-between">
                        <!-- <button type="button" class="btn btn-primary">1</button>
                        <button type="button" class="btn btn-primary">2</button> -->
                        <a href="./details.html?id=${card._id}" class="btn btn-success">Show more</a>
                        <a href="./backoffice.html?id=${card._id}" class="btn btn-outline-success">Edit</a>
                    </div>
                </div>
            </div>`;

            articles.appendChild(column);
        }
    }
}

const fetchData = async (type) => {

    try {
        const response = await fetch(api, auth)

        if (response.status === 400) throw new Error("Errore richiesta (Status: 400)")
        if (response.status === 404) throw new Error("Dato non trovato (Status: 404)")
        if (!response.ok) throw new Error("Errore fetch")

        const body = await response.json();
        console.log(body);

        addCard(body);
    } catch (error) {
        console.log(error);
    }
}