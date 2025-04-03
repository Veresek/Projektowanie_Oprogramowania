const JSONlocalStorage = JSON.parse(localStorage.getItem('user'));
console.log(JSONlocalStorage);

if (JSONlocalStorage == null) {
	window.location.href = './login.html';
}
