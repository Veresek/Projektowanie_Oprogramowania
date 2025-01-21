const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());

let con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'library',
});
con.connect(err => {
	if (!err) {
		console.log('Połączono z bazą');
	} else {
		console.log('Błąd połączenia z bazą: ' + err);
	}
});
app.get('/add-book/:title/:author', (req, res) => {
	let title = req.params.title;
	let author = req.params.author;
	const sql = `insert into books (title,author) Values ('${title}','${author}')`;
	con.query(sql, (err, result, fields) => {
		res.send('Pomyślnie dodano książkę');
	});
});
app.get('/books', (req, res) => {
	const sql = 'select * from books';
	con.query(sql, (err, result, fields) => {
		res.send(result);
	});
});
app.get('/update/:id/:title/:author', (req, res) => {
	const id = req.params.id;
	const title = req.params.title;
	const author = req.params.author;
	const sql = `Update books set title = '${title}', author = '${author}' where id = ${id}`;
	con.query(sql, (err, result, fields) => {
		res.send('Pomyślnie zmieniono dane');
	});
});
app.get('/del/:id', (req, res) => {
	const id = req.params.id;
	const sql = `DELETE FROM books WHERE id = ${id}`;
	con.query(sql, (err, result, fields) => {
		res.send('Pomyślnie usunięto dane');
	});
});
app.listen(3001, () => {
	console.log('działa');
});
