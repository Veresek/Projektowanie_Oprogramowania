const btns = document.querySelectorAll('button');
const ps = document.querySelectorAll('p');
async function getData(url) {
	let res = await fetch(`http://localhost:3001/${url}`);
	res = await res.text();
	return res;
}
btns[0].addEventListener('click', async () => {
	let inp = document.getElementById('uppercase');
	let res = await getData(`uppercase/${inp.value}`);
	ps[0].innerHTML = res;
});
btns[1].addEventListener('click', async () => {
	let inp = document.getElementById('length');
	let res = await getData(`length/${inp.value}`);
	ps[1].innerHTML = res;
});
btns[2].addEventListener('click', async () => {
	let inp = document.getElementById('sentence');
	let res = await getData(`reverseWords/${inp.value}`);
	ps[2].innerHTML = res;
});
btns[3].addEventListener('click', async () => {
	let inp = document.getElementById('Even');
	let res = await getData(`isEven/${inp.value}`);
	ps[3].innerHTML = res;
});
