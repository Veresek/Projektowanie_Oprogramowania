const express = require('express');
const app = express();

app.get('/:liczba1/:liczba2', (req, res) => {
	let liczba1 = parseInt(req.params.liczba1);
	let liczba2 = parseInt(req.params.liczba2);
	res.send(`${liczba1 + liczba2}`);
});
app.listen(3000, () => {
	console.log('Aplikacja działa');
});
