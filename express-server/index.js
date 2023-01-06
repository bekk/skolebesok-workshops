const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
	console.log(`Server lytter på port ${port}`);
});

app.get('/', function (request, response) {
	response.send('Velkommen til express-workshop');
});

app.get('/meg', function (request, response) {
	response.send('Hei jeg heter Sara og jeg er 24 år gammel');
});

app.get('/test/:test', function (request, response) {
	response.send('Dette er en eksempeltekst');
});

app.get('/temperatur/:by', function (request, response) {
	const by = request.params.by;
	response.send(`Jeg vil vite temperaturen i ${by}!`);
});

app.get('/fakta', async function (req, res) {
	const fakta = await hentFakta();
	res.send(fakta);
});

async function hentFakta() {
	return await fetch(`https://catfact.ninja/fact`)
		.then((response) => response.json()) // Gjør svaret om til JSON-format
		.then((data) => data.fact) // Returner data om alt fungerer som det skal
		.catch((error) => console.log(error)); // Print en feilmelding om noe går galt
}
