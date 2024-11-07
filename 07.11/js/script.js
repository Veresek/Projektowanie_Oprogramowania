const fCountryDiv = document.getElementById('firstCountry');
const sCountryDiv = document.getElementById('secondCountry');
const correctAns = document.getElementById('correct');
const incorrectAns = document.getElementById('incorrect');
const firstImg = document.createElement('img');
const secImg = document.createElement('img');
const firstName = document.createElement('p');
const secName = document.createElement('p');
const firstPop = document.createElement('p');
const secPop = document.createElement('p');
const next = document.getElementById('nextBtn');
let correct = 0;
let incorrect = 0;
let countires;
let firstCountry;
let secondCountry;
let guessed;
let clicked = 0;
async function getData() {
	let data = await fetch('https://restcountries.com/v3.1/region/europe');
	countires = await data.json();
	drawCountries(countires, 1);
}
function drawCountries(countries, wl) {
	let rfirstCountry;
	let rsecondCountry;
	if (wl == 1) {
		rfirstCountry = countries[Math.floor(Math.random() * countries.length)];
		do {
			rsecondCountry = countries[Math.floor(Math.random() * countries.length)];
		} while (rfirstCountry == rsecondCountry);
		firstCountry = rfirstCountry;
		secondCountry = rsecondCountry;
	} else {
		rfirstCountry = firstCountry;
		do {
			rsecondCountry = countries[Math.floor(Math.random() * countries.length)];
		} while (rfirstCountry == rsecondCountry);
		firstCountry = rfirstCountry;
		secondCountry = rsecondCountry;
	}
	displayData();
}
function displayData() {
	firstImg.src = firstCountry.flags.png;
	firstName.innerHTML = firstCountry.name.common;
	firstPop.innerHTML = `Population: ${firstCountry.population}`;
	secImg.src = secondCountry.flags.png;
	secName.innerHTML = secondCountry.name.common;
	secPop.innerHTML = `Population: ${secondCountry.population}`;
	firstName.classList.add('countryName');
	secName.classList.add('countryName');
	firstPop.classList.add('pop');
	secPop.classList.add('pop');
	fCountryDiv.appendChild(firstImg);
	fCountryDiv.appendChild(firstName);
	fCountryDiv.appendChild(firstPop);
	sCountryDiv.appendChild(secImg);
	sCountryDiv.appendChild(secName);
	sCountryDiv.appendChild(secPop);
}
fCountryDiv.addEventListener('click', () => {
	if (clicked == 0) {
		if (firstCountry.population > secondCountry.population) {
			correct++;
			updateScore();
			guessed = 1;
			firstPop.style.display = 'block';
			secPop.style.display = 'block';
			fCountryDiv.style.backgroundColor = 'green';
		} else if (firstCountry.population == secondCountry.population) {
			guessed = 1;
			firstPop.style.display = 'block';
			secPop.style.display = 'block';
			fCountryDiv.style.backgroundColor = 'yellow';
			sCountryDiv.style.backgroundColor = 'yellow';
		} else if (firstCountry.population < secondCountry.population) {
			guessed = 0;
			incorrect++;
			updateScore();
			firstPop.style.display = 'block';
			secPop.style.display = 'block';
			fCountryDiv.style.backgroundColor = 'red';
			sCountryDiv.style.backgroundColor = 'green';
		}
		clicked = 1;
	}
});
sCountryDiv.addEventListener('click', () => {
	if (clicked == 0) {
		if (firstCountry.population > secondCountry.population) {
			guessed = 0;
			incorrect++;
			updateScore();
			firstPop.style.display = 'block';
			secPop.style.display = 'block';
			fCountryDiv.style.backgroundColor = 'green';
			sCountryDiv.style.backgroundColor = 'red';
		} else if (firstCountry.population == secondCountry.population) {
			guessed = 1;
			firstPop.style.display = 'block';
			secPop.style.display = 'block';
			fCountryDiv.style.backgroundColor = 'yellow';
			sCountryDiv.style.backgroundColor = 'yellow';
		} else if (firstCountry.population < secondCountry.population) {
			guessed = 1;
			correct++;
			updateScore();
			firstPop.style.display = 'block';
			secPop.style.display = 'block';
			sCountryDiv.style.backgroundColor = 'green';
		}
		clicked = 1;
	}
});
next.addEventListener('click', () => {
	clicked = 0;
	firstPop.style.display = 'none';
	secPop.style.display = 'none';
	fCountryDiv.style.backgroundColor = '#555';
	sCountryDiv.style.backgroundColor = '#555';
	drawCountries(countires, guessed);
});

function updateScore() {
	correctAns.innerHTML = `Poprawne: <strong> ${correct} </strong>`;
	incorrectAns.innerHTML = `Niepoprawne: <strong> ${incorrect} </strong>`;
}
getData();
