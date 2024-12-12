const express = require('express');
const app = express();
const cors = require('cors');
const e = require('express');
app.use(cors());
app.get('/palindrome/:word', (req, res) => {
	const word = req.params.word;
	let reversed = word.split('').reverse().join('');
	if (word === reversed) {
		res.send(`Wyraz ${word} jest palindromem`);
	} else {
		res.send(`Wyraz ${word} nie jest palindromem`);
	}
});
app.get('/uppercase/:text', (req, res) => {
	const word = req.params.text;
	res.send(word.toUpperCase());
});
app.get('/random/:min/:max', (req, res) => {
	const min = Number(req.params.min);
	const max = Number(req.params.max);
	res.send(`${Math.floor(Math.random() * (max - min) + min)}`);
});
app.get('/reverse/:text', (req, res) => {
	const text = req.params.text;
	let reversed = text.split('').reverse().join('');
	res.send(reversed);
});
app.get('/length/:text', (req, res) => {
	const text = req.params.text;
	res.send(text.length + '');
});
app.get('/fibonacci/:n', (req, res) => {
	let nums = [0, 1];
	let finNums = [];
	const n = req.params.n;
	let fir = 0;
	let sec = 1;
	for (let j = 2; j < n; j++) {
		nums.push(fir + sec);
		if (nums.length % 2 == 1) fir = nums[nums.length - 1];
		else sec = nums[nums.length - 1];
	}
	for (let i = 0; i < n; i++) {
		finNums.push(nums[i]);
	}
	res.send(finNums);
});
app.get('/toFahrenheit/:celsius', (req, res) => {
	const celsius = req.params.celsius;
	let f = celsius * (9 / 5) + 32;
	res.send(f + 'F°');
});
app.get('/reverseWords/:sentence', (req, res) => {
	const sen = req.params.sentence;
	let senRev = sen.split(' ').reverse().join(' ');
	res.send(senRev);
});
app.get('/isEven/:number', (req, res) => {
	const number = req.params.number;
	if (number % 2 == 0) res.send(true);
	else res.send(false);
});
app.listen(3001, () => {
	console.log('wszystko ok');
});
