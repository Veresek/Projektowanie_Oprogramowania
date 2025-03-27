const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());

let con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'logowanie',
});
con.connect(err => {
	if (!err) {
		console.log('Polączono z bazą');
	} else {
		console.log('Nie połączono z bazą: ' + err);
	}
});
app.get('/logowanie/:login/:password', (req, res) => {
	const login = req.params.login;
	const password = req.params.password;

	let sql = `Select * from users where login = '${login}' and password = '${password}'`;
	con.query(sql, (err, result) => {
		if (err) throw err;
		console.log('result: ', result);
		res.json(result);
	});
});
app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
