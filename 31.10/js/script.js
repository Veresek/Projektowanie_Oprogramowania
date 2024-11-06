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
let gameHistory = [];
let notificationQueue = [];
let currentGame = { correct: 0, incorrect: 0, answers: [] };
let isDisplaying = false;
const name = document.createElement('p');
const img = document.createElement('img');

function displayNotif(wl, country) {
	const box = document.createElement('div');
	const h3 = document.createElement('h3');
	const p = document.createElement('p');
	if (wl == 1) {
		h3.innerHTML = 'Poprawna odpowiedź!';
		p.innerHTML = `Dobrze odgadłeś solicę kraju: ${country.name.common}`;
		box.classList.add('corrAns');
	} else {
		h3.innerHTML = 'Zła odpowiedź!';
		p.innerHTML = `Poprawna stolica ${country.name.common} to: ${country.capital[0]}`;
		box.classList.add('wrngAns');
	}
	box.appendChild(h3);
	box.appendChild(p);
	box.classList.add('ansInfo');
	notificationQueue.push(box);
	if (!isDisplaying) {
		DisplayNext();
	}
}

function DisplayNext() {
	if (notificationQueue.length == 0) {
		isDisplaying = false;
		return;
	}
	isDisplaying = true;
	const box = notificationQueue.shift();
	document.body.appendChild(box);
	box.addEventListener('animationend', () => {
		document.body.removeChild(box);
		DisplayNext();
	});
}
async function getData() {
	data = await fetch('https://restcountries.com/v3.1/region/europe');
	data = await data.json();
	return data;
}
async function game() {
	let countries = await getData();
	name.classList.add('name');
	country = countries[Math.floor(Math.random() * countries.length)];
	img.setAttribute('src', country.flags.png);
	name.innerHTML = country.name.common;
	console.log(country.capital[0]);
	divNation.insertBefore(name, divNation.firstChild);
	divNation.insertBefore(img, name);
	correctP.innerHTML = `Poprawne: <strong>${currentGame.correct}</strong>`;
	incorrectP.innerHTML = `Nie poprawne: <strong>${currentGame.incorrect}</strong>`;
}
game();
ansBtn.addEventListener('click', () => {
	const answer = {
		country: country.name.common,
		correct: capitalInp.value === country.capital[0],
	};
	if (answer.correct) {
		currentGame.correct++;
		displayNotif(1, country);
	} else {
		currentGame.incorrect++;
		displayNotif(0, country);
	}
	currentGame.answers.push(answer);
	capitalInp.value = '';
	game();
	capitalInp.focus();
	if (currentGame.incorrect >= 5) {
		endGame();
	}
});

function endGame() {
	const correctScr = document.createElement('p');
	const incorrectScr = document.createElement('p');
	const endH1 = document.createElement('h1');
	notificationQueue = [];
	correctScr.innerHTML = `Poprawne: <strong>${currentGame.correct}</strong>`;
	incorrectScr.innerHTML = `Nie poprawne: <strong>${currentGame.incorrect}</strong>`;
	end.style.display = 'block';
	end.innerHTML = '';
	endH1.className = 'endH1';
	endH1.innerText = 'Koniec gry';
	end.appendChild(endH1);
	end.appendChild(correctScr);
	end.appendChild(incorrectScr);
	again.innerHTML = 'Zagraj ponownie!';
	again.classList.add('again');
	end.appendChild(again);
	gameHistory.push(currentGame);
	updateHistory();
	again.addEventListener('click', () => {
		currentGame = { correct: 0, incorrect: 0, answers: [] };
		end.style.display = 'none';
		correctP.innerHTML = `Poprawne: <strong>${currentGame.correct}</strong>`;
		incorrectP.innerHTML = `Nie poprawne: <strong>${currentGame.incorrect}</strong>`;
	});
}

function updateHistory() {
	history.innerHTML = '<p class="points">Historia</p>';
	gameHistory.forEach((game, index) => {
		const gameButton = document.createElement('button');
		gameButton.innerHTML = `Gra ${index + 1}: Poprawne: <strong>${
			game.correct
		}</strong>, Nie poprawne: <strong>${game.incorrect}</strong>`;
		const details = document.createElement('div');
		details.style.display = 'none';
		details.innerHTML = '<h3>Szczegóły gry:</h3>';
		game.answers.forEach(answer => {
			const answerDetail = document.createElement('p');
			answerDetail.innerHTML = `${answer.country}: ${
				answer.correct ? 'Poprawne' : 'Nie poprawne'
			}`;
			answerDetail.style.color = answer.correct ? 'lightgreen' : 'red';
			details.appendChild(answerDetail);
		});
		gameButton.addEventListener('click', () => {
			details.style.display =
				details.style.display === 'none' ? 'block' : 'none';
		});
		gameButton.classList.add('gameButton');
		history.appendChild(gameButton);
		history.appendChild(details);
	});
}
