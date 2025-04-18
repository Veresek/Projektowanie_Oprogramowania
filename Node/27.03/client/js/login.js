const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', async () => {
	const loginInfo = document.getElementById('loginInfo');
	const loginInp = document.getElementById('login').value;
	const passwordInp = document.getElementById('password').value;

	const url = `http://localhost:3000/logowanie/${loginInp}/${passwordInp}`;
	let response = await fetch(url);
	let data = await response.json();
	if (response.length === 0) {
		loginInfo.innerHTML = 'nie zalogowano';
	} else {
		loginInfo.innerHTML = 'zalogowano';
		if (data[0].uprawnienia == 'user') {
			window.location.href = './user.html';
			localStorage.setItem('user', JSON.stringify(data[0]));
			localStorage.setItem('perm', JSON.stringify(data[0].uprawnienia));
		} else if (data[0].uprawnienia == 'admin') {
			window.location.href = './admin.html';
			localStorage.setItem('user', JSON.stringify(data[0]));
			localStorage.setItem('perm', JSON.stringify(data[0].uprawnienia));
		}
	}
});
