const express = require('express');
const app = express();
const cors = require('cors');
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

app.listen(3001, () => {
	console.log('wszystko ok');
});
