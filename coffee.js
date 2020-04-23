"use strict";
let state = "waiting";

let cupImg = document.querySelector(".coffee-cup img");
let progressBar = document.querySelector(".progress-bar");
let balanceInput = document.querySelector("input[placeholder='Баланс']");


cupImg.onclick = takeCoffee;

function buyCoffee(name, price, element) {
	if (state != "waiting") {
		return;
	}
	//console.log([name, price, element]);

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

//--------------------------Купюры--------------------------

let bills = document.querySelectorAll(".bills img");

for (let i = 0; i < bills.length; i++) {
	bills[i].onmousedown = takeMoney;
}
/* bills[i].onemousedown = function (event) {
		takeMoney(event);
}*/

function takeMoney(event) {
	event.preventDefault(); //alert("Вы нажали на купюру");
	//console.log(event.target); //console.log(this); равнозначное
	let bill = event.target;

	bill.style.position = "absolute";
	bill.style.transform = "rotate(90deg)";
	bill.style.margin = 0; //сбрасываем отступы

	let billCoords = bill.getBoundingClientRect();
	let billWidth = billCoords.width;
	let billHeight = billCoords.height;
	//console.log(event.clientX, event.clientY); // clientX - захватывает экран без полосы прокрутк, отображает данные по оси Х

	bill.style.top = event.clientY - billWidth/2 + "px";
	bill.style.left = event.clientX - billHeight/2 + "px";

	window.onmousemove = function(event) {
		bill.style.top = event.clientY - billWidth/2 + "px";
		bill.style.left = event.clientX - billHeight/2 + "px";
		//console.log("Пролетела Мышь!");
	}

	bill.onmouseup = function() {
		window.onmousemove = null;
		if ( inAtm(bill) ){
			let billCost = +bill.getAttribute("cost");
			balanceInput.value = +balanceInput.value + billCost;
			bill.remove();
		}
	}
}

function inAtm(bill) {
	let atm = document.querySelector(".atm img");

	let atmCoords = atm.getBoundingClientRect();
	let billCoords = bill.getBoundingClientRect();

	let billLeftTopCorner = {"x" : billCoords.x, "y" : billCoords.y};
	let billRightTopCorner = {"x" : billCoords.x + billCoords.width, "y" : billCoords.y};


	let atmLeftTopCorner = {"x" : atmCoords.x, "y" : atmCoords.y};
	let atmRightTopCorner = {"x" : atmCoords.x + atmCoords.width, "y" : billCoords.y};
	let atmLeftBottomCorner = {"x" : atmCoords.x, "y" : billCoords.y + atmCoords.height/3 };


	if (billLeftTopCorner.x > atmLeftTopCorner.x
		&& billRightTopCorner.x < atmRightTopCorner.x
		&& billLeftTopCorner.y > atmLeftTopCorner.y
		&& billLeftTopCorner.y < atmLeftBottomCorner.y
	) {
	   return true;
	}  else {
	   return false;
		}

}

//СДАЧА

let changeButton = document.querySelector(".change-btn");
/*changeButton.onclick = function () {
	takeChange();
}*/
changeButton.onclick = takeChange;

function takeChange() {
	tossCoin("10");
	/*changeBox.innerHTML += `
	<img src="img/10rub.png">
	`;*/
}

function tossCoin(cost) {
	let changeBox = document.querySelector(".change-box");
	changeBox.style.position = "relative";

	let changeBoxCoords = changeBox.getBoundingClientRect();
	let randomWidth = getRandomInt(0, changeBoxCoords.width - 50);
	let randomHeight = getRandomInt(0, changeBoxCoords.height - 50);

	let coin = document.createElement("img");
	coin.setAttribute("src", "img/10rub.png");
	coin.style.width = "50px"
	coin.style.height = "50px"
	changeBox.append(coin);
	//changeBox.append(coin); // добавляет в конец внутри элемента
	//changeBox.prepend(coin); // добавляет в начало внутри элемента
	//changeBox.before(coin); // перед элементом
	//changeBox.after(coin); // после элемента
	//changeBox.replaceWith(coin); заменяет элемент
	coin.style.position = "absolute";
	coin.style.top = randomHeight + "px";
	coin.style.left = randomWidth + "px";

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}