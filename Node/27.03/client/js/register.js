const registerBtn = document.getElementById('registerBtn');
registerBtn.addEventListener('click', async () => {
	const regInfo = document.getElementById('regInfo');
	const regLoginInp = document.getElementById('regLogin').value;
	const regPasswordInp = document.getElementById('regPassword').value;
	const regRepPasswordInp = document.getElementById('repeatPassword').value;

	if (regPasswordInp === regRepPasswordInp) {
		const url = `http://localhost:3000/register/${regLoginInp}/${regPasswordInp}`;
		let response = await fetch(url);
		let data = await response.json();
		if (response.status === 302) {
			regInfo.innerHTML = 'Login zajęty';
		} else if (response.status === 200) {
			regInfo.innerHTML = 'Zarejestrowano';
		}
	} else {
		regInfo.innerHTML = 'Podane hasła nie są takie same';
	}
});
