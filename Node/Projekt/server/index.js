const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());

let con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'MoneyShare',
});
con.connect(err => {
	if (!err) {
		console.log('Połączono z bazą');
	} else {
		console.log('Błąd połączenia z bazą: ' + err);
	}
});

app.listen(3000, () => {
	console.log('Działa');
});
