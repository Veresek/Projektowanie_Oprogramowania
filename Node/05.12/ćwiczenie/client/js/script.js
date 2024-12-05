const res = document.getElementById('res');
const btn = document.getElementById('btn');
const inp1 = document.getElementById('first');
const inp2 = document.getElementById('second');

async function getData() {
	let data = await fetch(
		`http://localhost:3001/dodaj/${inp1.value}/${inp2.value}`
	);
	data = await data.json();
	return data;
}

btn.addEventListener('click', async () => {
	let wynik = await getData();
	res.innerHTML = `Wynik to ${wynik}`;
});
