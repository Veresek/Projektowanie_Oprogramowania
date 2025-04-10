const button = document.createElement('button');
button.textContent = 'Wyloguj';
document.body.appendChild(button);

button.addEventListener('click', () => {
	localStorage.removeItem('user');
	localStorage.removeItem('perm');
	window.location.href = './login.html';
});
