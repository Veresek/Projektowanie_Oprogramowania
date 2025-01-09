const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: '2pro',
});
con.connect(err => {
	if (!err) {
		console.log('Połączono z bazą');
	} else {
		console.log('Błąd połączenia z bazą: ' + err);
	}
});

app.get('/getdata', (req, res) => {
	const sql = 'Select * from osoby';
	con.query(sql, (err, wynik, info_wynik) => {
		console.log(info_wynik);
		res.send(wynik);
	});
});
app.get('/pelnoletnie', (req, res) => {
	const sql = 'Select * from osoby where wiek >= 18';
	con.query(sql, (err, result, fields) => {
		console.log(fields);
		res.send(result);
	});
});
app.get('/add/:imie/:nazwisko/:wiek', (req, res) => {
	const imie = req.params.imie;
	const nazwisko = req.params.nazwisko;
	const wiek = req.params.wiek;
	const sql = `Insert into osoby (imie,nazwisko,wiek) VALUES ('${imie}','${nazwisko}',${wiek})`;
	con.query(sql, (err, result, fields) => {
		res.send('Pomyślnie dodano rekord');
	});
});
app.get("/wiek/:wiek",(req,res)=>{
    const wiek = req.params.wiek;
    const sql = `Select * from osoby where wiek > ${wiek}`
    con.query(sql, (err, result, fields) => {
		res.send(result);
	});
})
app.listen(3000, () => {
	console.log('dziala');
});
