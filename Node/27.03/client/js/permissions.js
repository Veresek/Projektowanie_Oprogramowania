const JSONlocalStorage = JSON.parse(localStorage.getItem('user'));
const localStoragePerm = JSON.parse(localStorage.getItem('perm'));
const siteUrl = window.location.pathname;
let permCheck = siteUrl.slice(
	siteUrl.lastIndexOf('/') + 1,
	siteUrl.lastIndexOf('.')
);
if (JSONlocalStorage == null || localStoragePerm != permCheck) {
	window.location.href = './login.html';
}
