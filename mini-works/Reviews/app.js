
// reviews
const reviews = [
    {
        id: 2,
        img: "./images/person (2).jpg",
        name: "Susan Stripes",
        position: "Senior backend developer",
        comment: "Mote there the flash given in however, companie the saw climes one feel know at. The from eros.",
        rating: "fas fa-star-half-alt"
    },
    {
        id: 3,
        img: "./images/person (3).jpg",
        name: "Anthony McAllister",
        position: "Graphic designer",
        comment: "Prestasse sí seguitando e principio intendo, parte per cose fermi.",
        rating: "fas fa-star"
    },
    {
        id: 4,
        img: "./images/person (4).jpg",
        name: "Mary Drunston",
        position: "Human resource officer",
        comment: "Tufted lenore my the from was, token napping or i darkness from seeming lent entrance,.",
        rating: ""
    },
    {
        id: 5,
        img: "./images/person (5).jpg",
        name: "Marcus Benny",
        position: "Cloud developer",
        comment: "Sillas hule recientes de la y de y, que desnudo tierra hombrecillo come repartiendo en muerte ni, escobazos diana bajo.",
        rating: "fas fa-star-half-alt"
    },
    {
        id: 6,
        img: "./images/person (6).jpg",
        name: "Angie Watson",
        position: "CEO, NetBits",
        comment: "Dolore sit gubergren est ipsum dolores invidunt. Clita dolor tempor vero clita. Nonumy ea lorem sit diam no ut diam sit, gubergren dolor elitr.",
        rating: "fas fa-star"
    },
    {
        id: 7,
        img: "./images/person (1).png",
        name: "Kimino Nawa",
        position: "Editor",
        comment: "Lenore name word the door meant louder my that saintly sure, bird much beguiling quoth and only, aidenn.",
        rating: "fas fa-star-half-alt"

    }
];
// selecting card contents
const img = document.getElementById("image");
const name = document.querySelector(".name");
const position = document.querySelector(".position");
const comment = document.querySelector(".comment");
const rating = document.querySelector(".rating");
const prev= document.querySelector(".prev");
const next= document.querySelector(".next");
const btt = document.querySelector(".btt");

// set selected starting position
let currentItem = 0;

// load initial card
window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
}
);

// select card based on item
showPerson = function(person) {
    const card = reviews[person];
    const star = rating.children[4];
    img.src = card.img;
    name.innerText = card.name;
    position.innerText = card.position;
    comment.innerText = card.comment;
    star.className = card.rating;
};

// show next card
next.addEventListener("click", () => {
    currentItem++;
    if (currentItem == reviews
        .length) {
        currentItem = 0;
    }
    showPerson(currentItem);
}
);
// show previous card
prev.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
}
);

// show random card
btt.addEventListener("click", () => {
    showPerson(Math.floor(Math.random() * reviews.length));
}
);
