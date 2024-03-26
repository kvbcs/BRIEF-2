let header = document.querySelector("header");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let h2 = document.querySelectorAll("h2");
let score = document.querySelector(".score");
let readme = document.querySelector(".readme");
let darkmode = document.querySelector(".darkmode");
let lightmode = document.querySelector(".lightmode");
let game = document.querySelector(".game");
let flipcard = document.querySelectorAll(".flip-card");
let flipcardfront = document.querySelectorAll(".flip-card-front");
let flipcardback = document.querySelectorAll(".flip-card-back");
let flipcardinner = document.querySelectorAll(".flip-card-inner");
let row1 = document.querySelector(".row1");

// FONCTION DU POPUP READ ME ET REPLAY
// FONCTION DU POPUP READ ME ET REPLAY
// FONCTION DU POPUP READ ME ET REPLAY
// FONCTION DU POPUP READ ME ET REPLAY
// FONCTION DU POPUP READ ME ET REPLAY

readme.addEventListener("click", tutorial);

function tutorial() {
	window.alert(
		"HOW TO PLAY : Click on the cards and match the corresponding icons together to win !"
	);
}

let replay = document.querySelector(".replay");
replay.addEventListener("click", () => location.reload());

// FONCTION DU BOUTON LIGHTMODE
// FONCTION DU BOUTON LIGHTMODE
// FONCTION DU BOUTON LIGHTMODE
// FONCTION DU BOUTON LIGHTMODE
// FONCTION DU BOUTON LIGHTMODE

lightmode.addEventListener("click", () => {
	lightMode();
	lightmode.style.visibility = "hidden";
	darkmode.style.visibility = "visible";
});

function lightMode() {
	body.style.backgroundColor = "white";
	body.style.transition = "3s";
	for (let i = 0; i < h2.length; i++) {
		h2[i].style.color = "black";
	}
	h1.style.color = "black";
	game.style.backgroundColor = "black";
	game.style.transition = "3s";
	for (let i = 0; i < flipcard.length; i++) {
		flipcard[i].style.border = "2px solid white";
		flipcard[i].style.borderRadius = "25px";
	}
}

// FONCTION DU BOUTON DARKMODE
// FONCTION DU BOUTON DARKMODE
// FONCTION DU BOUTON DARKMODE
// FONCTION DU BOUTON DARKMODE
// FONCTION DU BOUTON DARKMODE

darkmode.addEventListener("click", () => {
	darkMode();
	darkmode.style.visibility = "hidden";
	lightmode.style.visibility = "visible";
});

function darkMode() {
	body.style.backgroundColor = "black";
	body.style.transition = "3s";
	for (let i = 0; i < h2.length; i++) {
		h2[i].style.color = "white";
	}
	h1.style.color = "white";
	game.style.backgroundColor = "rgb(59, 59, 59)";
	game.style.transition = "3s";
	for (let i = 0; i < flipcard.length; i++) {
		flipcard[i].style.border = "2px solid black";
		flipcard[i].style.borderRadius = "25px";
	}
}

// CREATION DE LA CLASSE AVEC LA POO
// CREATION DE LA CLASSE AVEC LA POO
// CREATION DE LA CLASSE AVEC LA POO
// CREATION DE LA CLASSE AVEC LA POO
// CREATION DE LA CLASSE AVEC LA POO

class Card {
	constructor(image) {
		this.image = image;
	}
	createCard() {
		let divCard = document.createElement("div");
		divCard.classList.add("flip-card");
		divCard.addEventListener("click", () => {
			divCard.style.transform = "rotateY(180deg)";
			divInner.style.transform = "rotateY(180deg)";
			divBack.style.transform = "rotateY(180deg)";
		});
		let divInner = document.createElement("div");
		divInner.classList.add("flip-card-inner");
		let divFront = document.createElement("div");
		divFront.classList.add("flip-card-front");
		divFront.innerHTML = `<img src="images/question.png">`;
		let divBack = document.createElement("div");
		divBack.classList.add("flip-card-back");
		let imgElement = document.createElement("img");
		imgElement.src = this.image;
		imgElement.style.transform = "rotateY(180deg)";
		divBack.appendChild(imgElement);
		divInner.appendChild(divBack);
		divInner.appendChild(divFront);
		divCard.appendChild(divInner);
		row1.appendChild(divCard);
		if (imgElement.src === "images/question.png") {
			console.log("oui");
		}
	}
}

// GENERATEUR ALEATOIRE D'IMAGES
// GENERATEUR ALEATOIRE D'IMAGES
// GENERATEUR ALEATOIRE D'IMAGES
// GENERATEUR ALEATOIRE D'IMAGES
// GENERATEUR ALEATOIRE D'IMAGES

let img1 = "./images/youtube.png";
let img2 = "./images/twitter.png";
let img3 = "./images/twitch.png";
let img4 = "./images/windows.png";
let img5 = "./images/chrome.png";
let img6 = "./images/heart.png";
let cardImage = [img1, img2, img3, img4, img5, img6];
let cardsInarray = [];
let correctArray = [];

function checkRandom(randomImg) {
	console.log(correctArray.length);

	let reccurence = 0;

	cardsInarray.forEach((element) => {
		if (randomImg === element) {
			reccurence++;
		}
	});

	if (reccurence < 2) {
		correctArray.push(randomImg);
	}

	cardsInarray.push(randomImg);
}

function randomImg() {
	let randomIndex = Math.floor(Math.random() * cardImage.length);
	let randomImage = cardImage[randomIndex];
	checkRandom(randomImage);
}

// CREATION DES CARTES
// CREATION DES CARTES
// CREATION DES CARTES
// CREATION DES CARTES
// CREATION DES CARTES

while (correctArray.length < 12) {
	randomImg();
}

correctArray.forEach((element) => {
	let card = new Card(element);
	card.createCard();
});
