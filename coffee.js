"use strict"

function buyCoffee(name, price, element) {
	//console.log([name, price, element]);
	let balanceInput = document.querySelector("input[placeholder='Баланс']");
	
	if (+balanceInput.value < price) {
		changeDisplayText("Недостаточно средств/Insufficient funds");
		balanceInput.style.border = "5px solid red";
	} else {
	  balanceInput.value -= price;
	  balanceInput.style.border = "";
	  cookCoffee(name, element);
	}
}

function cookCoffee(name, buttonElement) {
	changeDisplayText("Ваш/Your " + name + " готовится/getting ready");
	let progressBar = document.querySelector(".progress-bar");
	console.log(progressBar);
}

function changeDisplayText(text) {
	let displayText = document.querySelector('.display-text');
	displayText.innerHTML = text;
}