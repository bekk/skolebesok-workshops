# Express 

I denne workshoppen skal lage en server ved bruk av express.

## Forklaringer 

### Hva er en server?
Innenfor webutvikling brukes en server for å lagre og organisere data og sender informsjon som skal vises på en nettside. Den siste delen er det som skjer når vi sender et kall. Ofte lagres denne dataen i en database, men for å forenkle prosessen litt skal vi i dag hente data fra et eksisterende API. 

### Hva er et API?
API er et grensesnitt som gir direkte tilgang til data og funksjonalitet i et datasystem, og gjør det svært mye enklere for et system eller en tjeneste å kommuniserer med datasystemet. API-er benyttes i hovedsak av annen programvare, og det er sjelden sluttbrukere har behov for å benytte disse direkte.

## Oppsett

### Sjekk Node-versjonen din
Lag guide her

Hvis under 18: 


### Opprette et Node.js prosjekt
For å sette opp det vi trenger for å lage serveren skal vi bruke terminalen. Under finner du informasjon om hva du må gjøre for å komme i gang. 

1. Start med å åpne terminalen. 

2. Lag en ny mappe ved å lime inn følgende kommando i terminalen: 
```
mkdir express-server
```

3. Gå inn i mappen du nettopp lagde:
```
cd express-server
```

4. Opprett et node-prosjekt:
```
npm init
```

5. Nå får du en del spørsmål om hvordan du ønsker å sette opp prosjektet, da kan du trykke `enter` på alle stegene (siste spørsmål er "Is this OK? (yes))

6. Åpne mappen du har laget i VSCode. 

I mappen du har laget har det nå kommet en fil som heter `package.json`. Dette er en fil som inneholder metadata om prosjektet og informerer om de funksjonelle avhengighetene som serveren krever. 

### Installer nodemon
Nå ønsker vi å installere en pakke som heter `nodemon`. Denne brukes for å automatisk starte serveren på nytt hver gang man lagrer en endring. Uten denne må man selv stoppe og starte serveren for hver endring man gjør. Installer og sett opp nodemon ved å følge stegene: 

1. I terminalen skriver du inn følgende kommanda for å installere pakken (pass på å at terminalen er i mappen `express-server`): 
```
npm install -g nodemon
```

2. Åpne filen som heter `package.json`.

3. Bytt ut linjen `"test": "echo \"Error: no test specified\" && exit 1"` med:
```
"start": "nodemon index.js"
```

Vi har nå laget et script som sier at vi skal bruke `nodemon` for å starte serveren. Filen `package.json` ser nå slik ut: 
```json
{
	"name": "express-server",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"start": "nodemon index.js"
	},
	"author": "",
	"license": "ISC"
}
```

For å starte serveren skriver man dette i terminalen:
```
npm start
```
OBS: Du vil få feilmelding i terminalen når du kjører denne kommandoen nå. Dette er fordi vi ikke har laget filen `index.js`, det skal vi gjøre videre.

Serveren kan stoppes ved å trykke `ctrl` + `c`.

### Installer Express
I denne workshoppen skal vi bruke `Express.js` for å lage en server. `Express.js` er et rammeverk som gjør det mulig å lage nettapplikasjoner, og for å ta det i bruk må vi først installere det. Dette gjøres ved å skrive følgende kommando i terminalen (pass på at du er i mappen `express-server`)

```
npm install express --save
```

Ved å kjøre denne kommandoen legger vi til `Express.js` som en avhengighet i prosjektet, og det vil det automatisk legges til kode i prosjektet ditt. 

I filen `package.json` blir det lagt til en kodesnutt som gir informasjon om den nye avhengigheten og hvilken versjon som brukes. Dette ser slik ut (tallene bak express er versjonen og kan variere avhengig av når man installerer): 

```json
"dependencies": {
		"express": "^4.18.2"
}
```

I tillegg opprettes det en fil som heter `package-lock.json` og en mappe som heter `node_modules`. Filen `package-lock.json` er laget automatisk, og den skal ikke endres. Den beskriver akkurat hvilke avhengigheter som er installert, slik at andre personer kan installere de samme avhengighetene i prosjektet på sin egen pc. Mappen `node_modules` inneholder en kopi av alle avhengigheter som er installert og generes automatisk basert på innholdet i `package-lock.json` filen. 

### Ta i bruk Express.js
Før vi starter oppgavene skal vi sette opp filen `index.js`. Start med å lage en fil som heter `index.js` i mappen `express-server`. Deretter skal du fylle inn følgende i filen: 

1. Importer express:
```javascript
const express = require('express');
```

2. Initialiser express og lagre det i en konstant:
```javascript
const app = express();
```

3. Definer en konstant som definerer porten: 
```javascript
const port = 3000;
```

4. Be appen lytte på porten vi definerte i steg 3:
```javascript
app.listen(port, () => {
	console.log(`Server lytter på port ${port}`);
});
```

Filen ser nå slik ut: 
```javascript
const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
	console.log(`Server lytter på port ${port}`);
});
```

Hvis du nå starter serveren ved å skrive `npm start` i terminalen skal det stå 
```
Server lytter på port 3000
```

### Åpne serveren i nettleseren
1. Åpne et vindu i nettleseren
2. Gå til http://localhost:3000/

Når du besøker denne siden sender du et kall til api-routingen "/". Siden vi ikke har fortalt serveren hva den skal gjøre når den mottar et slikt kall vil den svare med feilmeldingen `Cannot GET /` som du ser på skjermen. Dette skal vi fikse gjennom oppgavene!

## Oppgaver

### Oppgave 1 - Sett opp din første routing
For å fjerne feilmeldingen vi får når vi besøker http://localhost:3000/ må vi fortelle serveren hva den skal gjøre når den mottar et kall fra "/". Dette kan vi gjøre ved å skrive følgende i `index.js` filen: 

```javascript
app.get('/', function(request, response){
	response.send('Hello world!');
});
```

Hvis du refresher (`ctrl` + `r`) nettleserviduet vil du få meldingen "Hello World!" i stedet for feilmeldingen vi fikk tidligere. 

**Hva skjedde nå?**

Når du besøker http://localhost:3000/ sendes det et kall til "/". Dette kallet er en GET-request (forespørsel), det vil si at nettleseren _ber_ om data fra serveren, og vi har fortalt serveren hva den skal sende tilbake om om den mottar et slikt kall.

For å få til dette brukte vi metoden `get()` som tar inn to parametere: routingen ("/") og en funksjon som beskriver hvordan forespørselen skal håndteres. Denne funksjonen tar inn `request` og `response`. `request` er et objekt som inneholder informasjon om forespørselen som er sendt inn, og `response` brukes for å sende et svar tilbake. Vi sende et svar tilbake ved å skrive `response.send()` og legge inn en tekst. 


🏆 Få serveren til å returnere meldingen "Velkommen til express-workshop".

<details>
<summary>🚨 Løsningsforslag</summary>
Endre hva som står inni `res.send()` så det ser slik ut:

```javascript
app.get('/', function(request, response){
	response.send('Velkommen til express-workshop');
});

```

</details>

---

### Oppgave 2 - Lag en routing med informasjon om deg selv

🏆  Lag en routing som heter "/meg" og få serveren til å returnere "Hei jeg heter [ditt navn] og jeg er [din alder] år gammel".

Sjekk om det fungerer ved å besøke "

<details>
<summary>💡 Hint</summary>

Bruk samme fremgangsmetode som oppgave 1. Bytt ut "/" med "/meg" og skriv inn den nye meldingen i `res.send()`.

</details>

<details>
<summary>🚨 Løsningsforslag</summary>

```javascript
app.get('/meg', function(request, response){
	response.send('Hei jeg heter Sara og jeg er 24 år gammel');
});
```

</details>

---
### Oppgave 3 - Hent data fra eksternt API
Denne oppgaven er delt opp i flere deloppgaver.

🏆 Lag en routingen `/fakta` som returnerer meldingen "Her kommer det snart fakta". 

Besøk http://localhost:3000/fakta og se om du får meldingen. 

<details>
<summary>🚨 Løsningsforslag</summary>

```javascript
app.get('/fakta', function (req, res) {
	res.send('Her kommer det snart fakta');
});
```

</details>

<br />

🏆 Hent en tilfeldig fakta om katter: 

1. Lag en funksjon med navn hentFakta() som returnerer "Her kommer det snart fakta": 
```javascript
function hentFakta() {
	return 'Her kommer det snart fakta';
}
```

2. Bruk denne funksjonen i routingen for "/fakta" som du lagde i stad ved å kalle funksjonen `hentFakta()`:
```javascript
app.get('/fakta', function (req, res) {
	const fakta = hentFakta();
	res.send(fakta);
});
```

3. Nå ønsker vi å bytte ut meldingen "Her kommer det snart fakta" med en tilfeldig fakta om katter som vi henter fra https://catfact.ninja/fact. For å gjøre dette bruker vi metoden `fetch()` som lar oss snakke med andre API-er: 
```javascript
function hentFakta() {
	return fetch(`https://catfact.ninja/fact`)
		.then((response) => response.json()) // Gjør svaret om til JSON-format
		.catch((error) => console.log(error)); // Print en feilmelding om noe går galt
}
```

Hvis du besøker http://localhost:3000/fakta nå vil du kun få se `{}` på skjermen. Dette skjer fordi `fetch()` ikke gir svaret tilbake med en gang, men returnerer en `Promise`. Dette er et objekt som har fått beskjed om å gjennomføre en oppgave (i dette tilfellet å hente en fakta om katter), og når `fetch()` er ferdig inneholder objektet faktaen vi har hentet. Vi kan tenke på dette som at `fetch()` returnerer "Jeg henter fakta" og etter at den har brukt den tiden den trenger for å hente så får vi den faktiske verdien som vi er interessert i. Siden `fetch()` returnerer en verdi med en gang (selv om det ikke er den vi vil ha) får vi aldri tak i faktaen. Vi må derfor be får funksjon om å vente på svar fra `fetch()`. Dette gjør vi ved å gjøre våre funksjoner asynkrone, slik at vi kan si "vent før du fortsetter". 

4. Gjør routingen "/fakta" og `hentFakta()` asynkron og be de om å vente på svar fra `fetch()`. Vi gjør funksjonene asynkrone ved å legge til `async` foran begge funksjoner og ber de om å vente på svar fra `fetch()` ved å legge til `await`.
```javascript
app.get('/fakta', async function (req, res) {
	const fakta = await hentFakta();
	res.send(fakta);
});

async function hentFakta() {
	return await fetch(`https://catfact.ninja/fact`)
		.then((response) => response.json()) 
		.catch((error) => console.log(error));
}
```

Hvis du besøker http://localhost:3000/fakta nå få opp en tilfeldig fakta hentet fra https://catfact.ninja/fact. Meldingen vil se ut noe lignende dette (selve faktaen og lengden vil variere siden det er tilfeldig hva som hentes, men formatet skal være likt): 

```json
{"fact":"70% of your cat's life is spent asleep.","length":39}
```

Dette ser ikke veldig pent ut, og vi er heller interessert i å hente faktaen alene. For å fikse dette må vi endre på hva `hentFakta()` returnerer. Nå returneres et objekt som består av `fact` og `length`. Dette skal vi endre ved å hente ut `fact` fra objektet.

5. Fortell funksjonen din at den kun skal returnere `fact` ved å legge til `then((data) => data.fact)` i `hentFakta()` slik at hele funksjonen ser slik ut: 
```javascript
async function hentFakta() {
	return await fetch(`https://catfact.ninja/fact`)
		.then((response) => response.json()) 
		.then((data) => data.fact) 
		.catch((error) => console.log(error));
}
```

Nå satte vi `data` til å være hele objektet som vi så på skjermen i stad, og den består av `fact` og `length`. Vi kan hente ut `fact` fra `data` ved å skrive `fact.data`. Hvis du besøker http://localhost:3000/fakta skal du nå få en fakta om katter på skjermen, og hvis du refresher siden får du opp en ny fakta.

<details>
<summary>🚨 Løsningsforslag</summary>

```javascript
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
```

</details>

--- 

### Oppgave 4 - Lag en routing med varierende informasjon
Nå skal vi lage en routing som tar inn et parameter. Dette gjør at vi kan variere en del av routing som besøkes, men få det samme svaret. 

Lim inn koden under i `index.js`: 
```javascript
app.get('/test/:tall', function(request, response){
	response.send('Dette er en eksempeltekst');
});
```

Prøv å besøke http://localhost:3000/test/1 og http://localhost:3000/test/2. Får du samme innhold? 
- Dette er fordi vi har definert en routing hvor deler av den kan varieres. Dette gjorde vi ved å skrive `:tall` i routingen. Ved å skrive `:` foran forteller vi serveren at denne delen er varierende. 

🏆 Lag routingen `/temperatur/:by` og returner en melding som sier "Jeg vil vite været i [by]!". 

Hvis du besøker http://localhost:3000/hei/Ola skal du få meldingen "Hei Ola!"

Tips 💡: 
- Parametere som sendes inn finnes i `request` og du kan få tak i navnet ved å bruke `request.params.by`. 
- Lagre navnet som kommer inn i en variabel og legg det inn i teksten slik: ``` `Jeg vil vite temperaturen i ${by}!` ``` (legg merke til de spesielle fnuttene som brukes).

<details>
<summary>🚨 Løsningsforslag</summary>

```javascript
app.get('/temperatur/:by', function (request, response) {
	const by = request.params.by;
	response.send(`Jeg vil vite temperaturen i ${by}!`);
});
```

</details>

### Oppgave 4 - Hent informasjon om temperatur fra Yr.no

