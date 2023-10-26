// Lista de filmes
const movies = [
    {
        name: "Five Nights at Freddy's",
        image: "https://br.web.img2.acsta.net/pictures/23/06/27/21/17/2320488.jpg",
        screeningDate: "2023-10-27",
        isReleased: true,
        releaseDate: "2023-10-26",
        ticketPrice: 10,
        availableTickets: 50
    },
     {
        name: "Home Aranha",
        image: "https://upload.wikimedia.org/wikipedia/pt/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 20,
        availableTickets: 50
    },

     {
        name: "A Freira 2",
        image: "https://br.web.img3.acsta.net/pictures/23/07/11/23/06/0833684.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 10,
        availableTickets: 50
    },
     {
        name: "Megatubarão 2",
        image: "https://br.web.img2.acsta.net/pictures/23/07/28/17/00/0281797.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 10,
        availableTickets: 50
    },
     {
        name: "A Freira 2",
        image: "https://www.universalpics.com.br/tl_files/content/movies/trolls_3/posters/01.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 10,
        availableTickets: 50
    },
     {
        name: "A Freira 2",
        image: "https://br.web.img3.acsta.net/pictures/23/07/11/23/06/0833684.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 10,
        availableTickets: 50
    },
     {
        name: "A Freira 2",
        image: "https://br.web.img3.acsta.net/pictures/23/07/11/23/06/0833684.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 10,
        availableTickets: 50
    },
     {
        name: "A Freira 2",
        image: "https://br.web.img3.acsta.net/pictures/23/07/11/23/06/0833684.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 10,
        availableTickets: 50
    },
     {
        name: "A Freira 2",
        image: "https://br.web.img3.acsta.net/pictures/23/07/11/23/06/0833684.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 10,
        availableTickets: 50
    },
     {
        name: "A Freira 2",
        image: "https://br.web.img3.acsta.net/pictures/23/07/11/23/06/0833684.jpg",
        screeningDate: "2023-11-01",
        isReleased: true,
        releaseDate: "2023-10-25",
        ticketPrice: 10,
        availableTickets: 50
    },
];


// Adicionando filmes à página
const moviesList = document.getElementById("movies-list");

movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const image = document.createElement("img");
    image.classList.add("movie-image");
    image.src = movie.image;
    image.alt = movie.name;

    const title = document.createElement("div");
    title.classList.add("movie-title");
    title.textContent = movie.name;

    const info = document.createElement("div");
    info.classList.add("movie-info");
    info.textContent = `Data de exibição: ${movie.screeningDate}`;

    const ticketInfo = document.createElement("div");
    ticketInfo.classList.add("ticket-info");
    if (movie.isReleased) {
        ticketInfo.textContent = `Preço do ingresso: $${movie.ticketPrice} | Ingressos disponíveis: ${movie.availableTickets}`;
    } else {
        ticketInfo.textContent = `Data de lançamento: ${movie.releaseDate}`;
    }

    movieCard.appendChild(image);
    movieCard.appendChild(title);
    movieCard.appendChild(info);
    movieCard.appendChild(ticketInfo);

    moviesList.appendChild(movieCard);
});
