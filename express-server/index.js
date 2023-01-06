const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
	console.log(`Server lytter på port ${port}`);
});

/** Oppgave 1 */
app.get('/', function (request, response) {
	response.send('Velkommen til express-workshop');
});

/** Oppgave 2 */
app.get('/meg', function (request, response) {
	response.send('Hei jeg heter Sara og jeg er 24 år gammel');
});

/** Oppgave 3 */
app.get('/test/:test', function (request, response) {
	response.send('Dette er en eksempeltekst');
});

app.get('/hei/:navn', function (request, response) {
	const navn = request.params.navn;
	response.send(`Hei ${navn}!`);
});

/** Oppgave 4 */
app.get('/fakta', async function (req, res) {
	const fakta = await hentFakta();
	res.send(fakta);
});

async function hentFakta() {
	return await fetch(`https://catfact.ninja/fact`)
		.then((response) => response.json())
		.then((data) => data.fact)
		.catch((error) => console.log(error));
}

/** Oppgave 5 */
app.get('/temperatur/:id', async function (request, response) {
	const id = request.params.id;
	const temperatur = await hentTemperatur(id);
	response.send(
		`I dag vil det på kaldeste bli ${temperatur.min} grader og på det varmeste bli${temperatur.max}`
	);
});

async function hentTemperatur(id) {
	return await fetch(
		`https://www.yr.no/api/v0/locations/${id}/forecast?api_key=%2Fapi%2Fv0%2Flocations%2F%7BId%7D%2Fforecast`
	)
		.then((res) => res.json())
		.then((data) => data.dayIntervals[0].temperature)
		.catch((error) => console.log('errors', error));
}
