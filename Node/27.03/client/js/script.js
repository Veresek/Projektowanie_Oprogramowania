const loginBtn = document.getElementById('loginBtn');
const loginInfo = document.getElementById('loginInfo');
async function logowanie() {
	const loginInp = document.getElementById('login').value;
	const passwordInp = document.getElementById('password').value;

	const url = `http://localhost:3000/logowanie/${loginInp}/${passwordInp}`;
	let response = await fetch(url);
	response = await response.json();
	if (response.length === 0) {
		loginInfo.innerHTML = 'nie zalogowano';
	} else {
		loginInfo.innerHTML = 'zalogowano';
	}
}
loginBtn.addEventListener('click', logowanie);
