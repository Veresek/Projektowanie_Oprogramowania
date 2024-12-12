const btns = document.querySelectorAll('button');
const ps = document.querySelectorAll('p');
async function getData(url) {
	let data = await fetch(`http://localhost:3001/${url}`);
	data = await data.text();
	return data;
}
btns[0].addEventListener('click', async () => {
	const palindrome = document.getElementById('palindrome');
	let res = await getData(`palindrome/${palindrome.value}`);
	ps[0].innerHTML = res;
});
btns[1].addEventListener('click', async () => {
	const ttu = document.getElementById('ttu');
	let res = await getData(`uppercase/${ttu.value}`);
	ps[1].innerHTML = res;
});
btns[2].addEventListener('click', async () => {
	const min = document.getElementById('min');
	const max = document.getElementById('max');
	let res = await getData(`random/${min.value}/${max.value}`);
	ps[2].innerHTML = res;
});
btns[3].addEventListener('click', async () => {
	const reverse = document.getElementById('reverse');
	let res = await getData(`reverse/${reverse.value}`);
	ps[3].innerHTML = res;
});
btns[4].addEventListener('click', async () => {
	const length = document.getElementById('length');
	let res = await getData(`length/${length.value}`);
	ps[4].innerHTML = res;
});
btns[5].addEventListener('click', async () => {
	const n = document.getElementById('fibb');
	let res = await getData(`fibonacci/${n.value}`);
	ps[5].innerHTML = res;
});
btns[6].addEventListener('click', async () => {
	const celsius = document.getElementById('celsius');
	let res = await getData(`toFahrenheit/${celsius.value}`);
	ps[6].innerHTML = res;
});
btns[7].addEventListener('click', async () => {
	const sentance = document.getElementById('sentance');
	let res = await getData(`reverseWords/${sentance.value}`);
	ps[7].innerHTML = res;
});
btns[8].addEventListener('click', async () => {
	const even = document.getElementById('even');
	let res = await getData(`isEven/${even.value}`);
	ps[8].innerHTML = res;
});
