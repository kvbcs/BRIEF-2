let carte1 = document.querySelector(".carte1");
let carte2 = document.querySelector(".carte2");
let question = document.querySelectorAll(".question");

const imageArray = [
	"./images/chrome.png",
	"./images/chrome.png",
	"./images/youtube.png",
	"./images/youtube.png",
	"./images/twitch.png",
	"./images/twitch.png",
	"./images/heart.png",
	"./images/heart.png",
	"./images/twitter.png",
	"./images/twitter.png",
	"./images/windows.png",
	"./images/windows.png",
];
console.log(imageArray);

function getRandom() {
	return imageArray[Math.floor(imageArray.length * Math.random())]; //ne pas oublier return, randomise l'img
}

class Cards {
	constructor(height, width, border, radius, bgcolor, image) {
		this.height = height;
		this.width = width;
		this.border = border;
		this.radius = radius;
		this.bgcolor = bgcolor;
		this.image = image;
	}
    createCards() {
let cardsDiv = document.createElement("div");
    }
}

let gameCards = new Cards("100px", "100px", "2px solid black", "25px", "red", "images/question.png")

carte1.addEventListener("click", function () {
	console.log("works");
	let img = document.createElement("img"); //créé une img en html, document est important sinon marche pas!
	img.src = getRandom(); //cherche la source d'img dans l'array
	carte1.innerHTML = ""; //retire question
	carte1.appendChild(img); //ajoute imageArray à carte1
});
carte2.addEventListener("click", function () {
	console.log("works");
	let img = document.createElement("img");
	img.src = getRandom();
	carte2.innerHTML = "";
	carte2.appendChild(img);
});
