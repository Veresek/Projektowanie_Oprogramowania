const btn = document.getElementById('addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');
const p = document.getElementById('p');
const container = document.querySelector('div');
async function addBook() {
	let sendBook = await fetch(
		`http://localhost:3001/add-book/${title.value}/${author.value}`
	);
	sendBook = await sendBook.text();
}
async function drawTable() {
	let tab = document.querySelector('table');
	if (tab != null) {
		tab.remove();
	}
	let d1 = document.querySelector('h1');
	if (d1 != null) {
		d1.remove();
	}
	let jsn = await fetch('http://localhost:3001/books');
	jsn = await jsn.json();
	const h1 = document.createElement('h1');
	h1.innerHTML = 'Książki:';
	container.appendChild(h1);
	const table = document.createElement('table');
	container.appendChild(table);
	table.innerHTML = `            
        <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
        </tr>`;
	for (let i = 0; i < jsn.length; i++) {
		let tr = document.createElement('tr');
		table.appendChild(tr);
		let id = document.createElement('td');
		let title = document.createElement('td');
		let author = document.createElement('td');
		id.innerHTML = jsn[i].id;
		title.innerHTML = jsn[i].title;
		author.innerHTML = jsn[i].author;
		tr.appendChild(id);
		tr.appendChild(title);
		tr.appendChild(author);
	}
}
drawTable();
btn.addEventListener('click', async () => {
	await addBook();
	drawTable();
});
