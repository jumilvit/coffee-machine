"use strict"

//window.document.documentElement.body - полный вид

//console.log(document.body); //(укороченный) в консоли отображается все что в тегах body
//--------------------Устаревшие методы---------------------------------
/*let coffeeMachine = document.getElementById("coffee"); //Поиск по ID (внутри забрать/найти элемент по айдишнику)
console.log(coffeeMachine);
let images = document.getElementsByTagName("img") //поиск по тегам
console.log(images);
let coffeeItems = document.getElementsByClassName("coffee-item"); //Поиск по классу
console.log(coffeeItems);
let firstImage = coffeeItems[0].getElementsByTagName("img");
console.log(firstImage[0]);
*/

//--------------------СОВРЕМЕННЫЕ МЕТОДЫ--------------------------------
/*let coffeeMachine = document.querySelector("#coffee");
console.log(coffeeMachine);
let image = document.querySelector("img");
console.log(image);
let coffeeItems = document.querySelectorAll(".coffee-item");
console.log(coffeeItems);
let itemImage = document.querySelectorAll(".coffee-item img");
console.log(itemImage);
let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img");
console.log(cupImages);
*/
//----------------------РАБОТА С ЭЛЕМЕНТАМИ-----------------------------
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "15px solid brown";
coffeeMachine.style.borderRadius = "30px";
coffeeMachine.style.position = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";
let coffeeMachineTop = coffeeMachine.style.top;
console.log( parseInt(coffeeMachineTop) );
*/
//-------------------ИЗМЕНЕНИЕ АТРИБУТОВ----------------------
/*let balance = document.querySelector("input[type='text']");
let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute("type", "date");

console.log( balance.hasAttribute("placeholder") );
balance.removeAttribute("aria-label");
balance.value = 500; // == balance.setAttribute('value', 500);
console.log(balance.value); // == balance.getAttribute('value');*/

//------------------ИЗМЕНЕНИЕ КЛАССОВ-------------------------
/*let changeButton = document.querySelector(".btn");
console.log(changeButton.classList);
changeButton.classList.remove("btn-primary");
changeButton.classList.add("btn-success");

*///changeButton.classList.toggle("ml-5"); // Вкл. / Выкл.

//--------------ИЗМЕНЕНИЕ СОДЕРЖИМОГО ЭЛЕМЕНТОВ-----------
/*let displayText = document.querySelector(".display-text");
console.log( displayText.innerHTML );
console.log( displayText.innerText );
//displayText.innerHTML = "<b>Готовим Кофе</b>";
displayText.innerText = "<b>Готовим Кофе</b>";
*/

//--------------СОБЫТИЯ И СЛУШАТЕЛИ СОБЫТИЙ-------------------
//Мышь = click mouserover mouseup mousedown mousemove
//для input

//----------------------Ключевое слово this----------------------------------------
//this возвращает объект. к которомму обращено свойство или обращен метод

//  <div class="coffee-item" onclick="buyCoffee('Американо', 50, this)">

// Тоже самое, что:
/*let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function () {
	buyCoffee('Американо', 50, this);
}

function buyCoffee(name, price, element) {
	console.log([name, price, element]);
}
*/

//-----------------------ПЛАНИРОВАНИЕ--------------------------------
//ТАЙМАУТ

/*let timeout = setTimeout(paintBody, 5000, 'aqua');

let changeButton = document.querySelector(".btn");
changeButton.onclick = function() {
	clearTimeout(timeout);
}
/*function paintBody() {
	document.body.style.background = "crimson";
}
*/

/*setTimeout( function () {
	paintBody('aqua');
}, 5000); 

function paintBody(color) {
	document.body.style.background = color; //равнозначные решения
}
*/

/*let interval = setInterval(trashConsole, 2000);

let changeButton = document.querySelector(".btn");
changeButton.onclick = function() {
	clearInterval(interval);
}

function trashConsole() {
	console.log( Math.random() );
}
*/