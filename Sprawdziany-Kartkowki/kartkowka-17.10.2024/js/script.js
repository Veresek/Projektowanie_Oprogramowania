function one() {
	const div = document.createElement('div');
	const input = document.createElement('input');
	div.style.width = `200px`;
	div.style.height = `200px`;
	div.style.backgroundColor = `black`;
	input.type = 'color';
	document.body.appendChild(div);
	document.body.appendChild(input);
	input.addEventListener('change', () => {
		div.style.backgroundColor = input.value;
	});
}
function two() {
	const input = document.createElement('input');
	const button = document.createElement('button');
	button.textContent = `Dodaj`;
	document.body.appendChild(input);
	document.body.appendChild(button);
	button.addEventListener('click', () => {
		const p = document.createElement('p');
		p.textContent = input.value;
		document.body.appendChild(p);
	});
}
function three() {
	const div = document.createElement('div');
	div.style.border = `2px solid black`;
	div.style.marginTop = `10px`;
	div.style.display = 'flex';
	div.style.alignItems = 'center';
	div.style.justifyContent = 'center';
	const inputWidth = document.createElement('input');
	const inputHeight = document.createElement('input');
	const button = document.createElement('button');
	const p = document.createElement('p');
	p.style.margin = 0;
	button.textContent = 'Zmien wymiary';
	inputHeight.type = 'number';
	inputHeight.placeholder = 'Wysokosc';
	inputWidth.type = 'number';
	inputWidth.placeholder = 'Szerokosc';
	document.body.appendChild(inputWidth);
	document.body.appendChild(inputHeight);
	document.body.appendChild(button);
	button.addEventListener('click', () => {
		div.style.height = `${inputHeight.value}px`;
		div.style.width = `${inputWidth.value}px`;
		p.textContent = `${inputWidth.value}px x ${inputHeight.value}px `;
		document.body.appendChild(div);
		div.appendChild(p);
	});
}
function four() {
	const input = document.createElement('input');
	const addBtn = document.createElement('button');
	const ul = document.createElement('ul');
	addBtn.textContent = 'Dodaj element';
	document.body.appendChild(input);
	document.body.appendChild(addBtn);
	document.body.appendChild(ul);
	addBtn.addEventListener('click', () => {
		const li = document.createElement('li');
		const delBtn = document.createElement('button');
		delBtn.style.marginLeft = '10px';
		delBtn.textContent = `Usuń element`;
		li.textContent = input.value;
		ul.appendChild(li);
		li.appendChild(delBtn);
		delBtn.addEventListener('click', function () {
			this.parentElement.style.display = 'none';
		});
	});
}
