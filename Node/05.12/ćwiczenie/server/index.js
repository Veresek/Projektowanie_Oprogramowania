const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/dodaj/:liczba1/:liczba2', (req, res) => {
	let l1 = Number(req.params.liczba1);
	let l2 = Number(req.params.liczba2);
	let suma = l1 + l2;
	res.send(suma + '');
});
app.listen(3001, () => {
	console.log('apliakcja dziala');
});
