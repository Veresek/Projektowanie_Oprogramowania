const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const md5 = require('md5');
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

	let sql = `Select * from users where login = '${login}' and password = '${md5(
		password
	)}'`;
	con.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
});
app.get('/register/:login/:password', (req, res) => {
	const login = req.params.login;
	const password = req.params.password;

	let sql = `Select login from users where login = '${login}'`;
	con.query(sql, (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.status(302);
			res.json({ error: 'Login juz istnieje' });
		} else {
			const sql = `INSERT INTO users VALUES ('${login}', '${md5(
				password
			)}', 'user')`;
			con.query(sql, (err, result) => {
				if (err) throw err;
				res.json(result);
			});
		}
	});
	console.log(md5(password));
});
app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
