const body = document.querySelector("body");
const div = document.createElement("div");
const button1 = document.createElement("button");
const button2 = document.createElement("button");

body.appendChild(div);

div.style.width = "500px";
div.style.height = "500px";
div.style.border = "2px solid black";
div.style.borderRadius = "10px";

body.appendChild(button1);
body.appendChild(button2);
button1.textContent = "Niebieski";
button2.textContent = "Zielony";
button1.classList.add("button");
button1.style.backgroundColor = "lightblue";
button2.classList.add("button");
button2.style.backgroundColor = "lightgreen";
button1.addEventListener("click", () => {
	div.style.backgroundColor = "lightblue";
});
button2.addEventListener("click", () => {
	div.style.backgroundColor = "lightgreen";
});

const input = document.createElement("input");
const InputButton = document.createElement("button");
input.type = "color";
body.appendChild(input);
body.appendChild(InputButton);
InputButton.textContent = "Zmień kolor";
InputButton.classList.add("InputButton");
input.classList.add("inputColor");
InputButton.addEventListener("click", () => {
	div.style.backgroundColor = input.value;
});

const inputDiv = document.createElement("input");
const BtninputDiv = document.createElement("button");
inputDiv.type = "text;";
div.appendChild(inputDiv);
div.appendChild(BtninputDiv);
BtninputDiv.classList.add("buttonDiv");
inputDiv.classList.add("inputDiv");
BtninputDiv.textContent = "Dodaj";
BtninputDiv.addEventListener("click", () => {
	const p = document.createElement("p");
	p.textContent = inputDiv.value;
	div.appendChild(p);
	p.classList.add("p");
});

const liInput = document.createElement("input");
const ul = document.createElement("ul");
const liButton = document.createElement("button");
body.appendChild(liInput);
body.appendChild(liButton);
body.appendChild(ul);
liButton.textContent = "dodaj";
liButton.addEventListener("click", () => {
	const delbtn = document.createElement("button");
	const li = document.createElement("li");
	delbtn.textContent = "delete";
	li.textContent = liInput.value;
	ul.appendChild(li);
	li.appendChild(delbtn);
	delbtn.addEventListener("click", function () {
		this.parentElement.style.display = "none";
	});
});
