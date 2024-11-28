const uczen = [
	{
		imie: 'Jan',
		nazwisko: 'Nowak',
		klasa: { nazwa: '3PRO', wychowawca: 'Jan Kowalski' },
	},
	{
		imie: 'Kacper',
		nazwisko: 'Filipowski',
		klasa: { nazwa: '2PRO', wychowawca: 'Jan Kowalski' },
	},
];
for (let i = 0; i < uczen.length; i++) {
	if (uczen[i].klasa == '2PRO') {
		uczen[i].klasa = '1PRO';
	}
}
console.log(uczen);
console.log(uczen.imie);
