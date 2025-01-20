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
	alert(sendBook);
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
		let edit = document.createElement('button');
		let del = document.createElement('button');
		edit.innerHTML = 'Edytuj';
		del.innerHTML = 'Usuń';
		id.innerHTML = jsn[i].id;
		title.innerHTML = jsn[i].title;
		author.innerHTML = jsn[i].author;
		tr.appendChild(id);
		tr.appendChild(title);
		tr.appendChild(author);
		tr.append(edit);
		tr.append(del);
		del.classList.add('delBtn');
		edit.classList.add('editBtn');
		edit.addEventListener('click', () => {
			let id = this.previousSibling.previousSibling.previousSibling;
			let title = this.previousSibling.previousSibling;
			let author = this.previousSibling;
			title.innerHTML = "<input type='text' id='title'>";
			author.innerHTML = "<input type='text' id='author'>";
			edit.style.display = 'none';
			const conf = document.createElement('button');
			conf.innerHTML = 'Zatwierdź';
			tr.insertBefore(conf, del);
			conf.addEventListener('click', async () => {
				let titleVal = title.value;
				let authorVal = author.value;
				const upd = await fetch(
					`http://localhost:3001/update/${id}/${titleVal}/${authorVal}`
				);
				upd = await upd.text();
				alert(upd);
				drawTable();
			});
		});
		del.addEventListener('click', async () => {
			let id =
				this.previousSibling.previousSibling.previousSibling.previousSibling;
			const del = await fetch(`http://localhost:3001/del/${id}`);
			del = await del.text();
			alert(del);
			drawTable();
		});
	}
}
drawTable();
btn.addEventListener('click', async () => {
	await addBook();
	drawTable();
});
