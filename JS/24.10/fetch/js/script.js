function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function getData() {
	const data = await fetch('https://restcountries.com/v3.1/all');
	const json = await data.json();
	console.log(json);
	return json;
}
async function displayData() {
	const data = await getData();
	for (let i = 0; i < data.length; i++) {
		const div = document.createElement('div');
		const h1 = document.createElement('h1');
		const img = document.createElement('img');
		const pCap = document.createElement('p');
		const pPop = document.createElement('p');
		const pCont = document.createElement('p');
        div.classList.add("flip-in-hor-bottom")
		div.style.width = '200px';
		div.style.height = '400px';
		div.style.border = '1px solid black';
		div.style.backgroundColor = '#CCC';
		div.style.textAlign = 'center';
		document.querySelector('body').appendChild(div);
		h1.innerHTML = data[i].name.common;
		img.setAttribute('src', data[i].flags.png);
		img.style.width = '200px';
		img.style.height = '120px';
		pCap.innerHTML = `<span>Capital:</span> ${data[i].capital}`;
		pPop.innerHTML = `<span>Population:</span> ${data[i].population}`;
		pCont.innerHTML = `<span>Continent:</span> ${data[i].continents[0]}`;
		div.appendChild(img);
		div.appendChild(h1);
		div.appendChild(pCap);
		div.appendChild(pPop);
		div.appendChild(pCont);
	}
}
displayData();
