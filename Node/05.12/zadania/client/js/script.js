const btns = document.querySelectorAll('button');
const ps = document.querySelectorAll('p');
async function getData(url) {
	let data = await fetch(`http://172.16.15.112:3001/${url}`);
	data = await data.json();
	return data;
}
btns[0].addEventListener('click', async () => {
	const palindrome = document.getElementById('palindrome');
	let res = await getData(`palindrome/${palindrome.value}`);
	ps[0].innerHTML = res;
});
