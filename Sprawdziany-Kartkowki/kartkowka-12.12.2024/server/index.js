const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/uppercase/:text', (req, res) => {
	let text = req.params.text;
	res.send(text.toUpperCase() + '');
});
app.get('/length/:text', (req, res) => {
	let text = req.params.text;
	res.send(text.length + '');
});
app.get('/reverseWords/:sentence', (req, res) => {
	let text = req.params.sentence;
	let rev = text.split(' ').reverse().join(' ');
	res.send(rev + '');
});
app.get('/isEven/:number', (req, res) => {
	let num = req.params.number;
	if (num % 2 == 0) res.send(true);
	else res.send(false + '');
});
app.listen(3001, () => {
	console.log('wszystko ok');
});
