"use strict";
let state = "waiting";

let cupImg = document.querySelector(".coffee-cup img");
let progressBar = document.querySelector(".progress-bar");

cupImg.onclick = takeCoffee;

function buyCoffee(name, price, element) {
	if (state != "waiting") {
		return;
	}
	//console.log([name, price, element]);
	let balanceInput = document.querySelector("input[placeholder='Баланс']");

	if (+balanceInput.value < price) {
		changeDisplayText("Недостаточно средств/Insufficient funds");
		balanceInput.style.border = "5px solid red";
	} else {
	  balanceInput.value -= price;
	  balanceInput.style.border = "";
	  state = "cooking";
	  cookCoffee(name, element);
	}
}

function cookCoffee(name, buttonElement) {
	changeDisplayText("Ваш/Your " + name + " готовится/getting ready");
	let progressBar = document.querySelector(".progress-bar");
	let buttonImg = buttonElement.querySelector("img");
	let cupSrc = buttonImg.getAttribute("src");
	let cupImg = document.querySelector(".coffee-cup img");

	cupImg.setAttribute("src", cupSrc);
	cupImg.classList.remove("d-none");



	let i = 0;
	let interval = setInterval( function() {
		i++;
		progressBar.style.width = i + "%";
		cupImg.style.opacity = i + "%";
		if (i == 110) {
			clearInterval(interval);
			changeDisplayText("Ваш/Your " + name + " готов/ready");
			cupImg.style.cursor = "pointer";
			state = "ready";
		}
	}, 100 );
}

function takeCoffee() {
	if (state != "ready") {
		return;
	}
	state = "waiting";
	cupImg.style.opacity = 0;
	cupImg.style.cursor = "";
	cupImg.classList.add("d-none");
	changeDisplayText("Выберите Кофе/Choose Coffee");
	progressBar.style.width = 0;
}

function changeDisplayText(text) {
	let displayText = document.querySelector('.display-text');
	displayText.innerHTML = text;
}