const divNation = document.getElementById('randomNation');
const capitalInp = document.getElementById('capitalInp');
const ansBtn = document.getElementById('ansBtn');
const correctP = document.getElementById('correct');
const incorrectP = document.getElementById('incorrect');
const end = document.getElementById('end');
const again = document.createElement('button');
const history = document.getElementById('history');
let data;
let country;
let correct = 0;
let incorrect = 0;
let counterGames;
let games = [
	[
		['link do flagi', 1],
		['link do flagi 2', 0],
	],
	[
		['link do flagi w grze 2', 1],
		['link do flagi w grze 2', 0],
	],
];
const name = document.createElement('p');
name.classList.add('name');
const img = document.createElement('img');
async function getData() {
	data = await fetch('https://restcountries.com/v3.1/region/europe');
	data = await data.json();
	return data;
}
async function game() {
	let countries = await getData();
	country = countries[Math.floor(Math.random() * countries.length)];
	img.setAttribute('src', country.flags.png);
	name.innerHTML = country.name.common;

	console.log(country);
	divNation.insertBefore(name, divNation.firstChild);
	divNation.insertBefore(img, name);
	correctP.innerHTML = `Poprawne: <strong>${correct}</strong>`;
	incorrectP.innerHTML = `Nie poprawne: <strong>${incorrect}</strong>`;
}
game();
ansBtn.addEventListener('click', () => {
	if (capitalInp.value == country.capital[0]) {
		correct++;
		alert(`Podałeś poprawną stolicę ${country.name.common}`);
		capitalInp.value = '';
		game();
	} else {
		alert(`Podałeś nie poprawną stolicę ${country.name.common}`);
		incorrect++;
		capitalInp.value = '';
		game();
	}
	if (incorrect >= 5) {
		const correctScr = document.createElement('p');
		const incorrectScr = document.createElement('p');
		correctScr.innerHTML = `Poprawne: <strong>${correct}</strong>`;
		incorrectScr.innerHTML = `Nie poprawne: <strong>${incorrect}</strong>`;
		end.style.display = 'block';
		end.appendChild(correctScr);
		end.appendChild(incorrectScr);
		again.innerHTML = 'Zagraj ponownie!';
		again.classList.add('again');
		end.appendChild(again);
		again.addEventListener('click', () => {
			correct = 0;
			incorrect = 0;
			end.style.display = 'none';
			correctP.innerHTML = `Poprawne: <strong>${correct}</strong>`;
			incorrectP.innerHTML = `Nie poprawne: <strong>${incorrect}</strong>`;
		});
	}
});
function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		let dropdowns = document.getElementsByClassName('dropdown-content');
		for (let i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

function appendGame(arr) {
	const div = document.createElement('div');
	const button = document.createElement('button');
	const dropdown = document.createElement('div');

	button.textContent = `${counterGames} gra`;
	div.classList.add('dropdown');
	button.classList.add('dropbtn');
	button.onclick = 'myFunction()';
	div.appendChild(button);
	history.appendChild(div);
	div.appendChild(dropdown);
	for (let i = 0; i < correct + incorrect; i++) {
		const Dropdiv = document.createElement('div');
		const dropP = document.createElement('p');
		const Dropimg = document.createElement('img');
		Dropdiv.classList.add('dropdown-content');
		dropP.innerHTML = games[i][1];
		Dropimg.src = country.flags.png;
		div.appendChild(Dropdiv);
		Dropdiv.appendChild(Dropimg);
		Dropdiv.appendChild(DropP);
	}
}
appendGame(['gfdg', 'gdfgd']);
