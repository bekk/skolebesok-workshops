# Workshop: Sette opp en server med Nodejs og Express 

I denne workshoppen skal lage en server ved bruk av Node.js og Express.

## 🤓 Litt bakgrunnsinformasjon  

### Hva er en server?
Innenfor webutvikling brukes en server for å lagre og organisere data, og sende informsjon som skal vises på en nettside. Frontend (nettsiden) får informasjonen fra en server ved å sende et _kall_ til serveren, og presenterer deretter dette for brukeren. På nettsiden ser man da ofte en "penere" versjon av informasjonen. 

Frontend forteller serveren hvilken informasjon den ønsker å motta ved å sende _kall_ til spesifikke URL-er. I denne workshoppen skal vi kun lage serveren, og skal derfor sende kall til serveren ved å besøke URL-er direkte i nettleseren.

### Hva er et API?
Et API er en samling av URL-er man kan kalle for å kommunisere med serveren, og hente ut informasjon. I dag skal vi både lage vårt egne API og bruke eksisterende API-er.

## Emoji-guide
Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- 🏆 Oppgave: Her er hva du skal gjøre
- 💡 Tips: Litt ekstra info som kan være greit å ha for å løse en oppgave
- 🚨 Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du _kan_ løse oppgaven


## 💻 Oppsett 
For å sette opp det vi trenger for å lage serveren skal vi bruke terminalen. Under finner du informasjon om hva du må gjøre for å komme i gang. 

1. Lag en mappe som heter `express-server` der du ønsker å lagre koden. 

2. Åpne mappen i VSCode eller ønsket program. 

3. Åpne en terminal i VSCode ved å trykke `Terminal > New terminal`

### Opprette et Node.js prosjekt
For å opprette et node-prosjekt følger du stegene under. Pass på at du er i riktig mappe (`express-server`)

1. Opprett et node-prosjekt:
```
npm init
```

2. Nå får du en del spørsmål om hvordan du ønsker å sette opp prosjektet, da kan du trykke `enter` på alle stegene (siste spørsmål er "Is this OK? (yes))

3. Åpne mappen du har laget i VSCode. 

I mappen du har laget har det nå kommet en fil som heter `package.json`. Dette er en fil som inneholder metadata om prosjektet og informerer om de funksjonelle avhengighetene som serveren krever. 

### Installer nodemon
Nå ønsker vi å installere en pakke som heter `nodemon`. Denne brukes for å automatisk starte serveren på nytt hver gang man lagrer en endring. Uten denne må man selv stoppe og starte serveren for hver endring man gjør. Installer og sett opp nodemon ved å følge stegene: 

1. I terminalen skriver du inn følgende kommando for å installere pakken (pass på å at terminalen er i mappen `express-server`): 
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
I denne workshoppen skal vi bruke `Express.js` for å lage serveren. `Express.js` er et rammeverk som gjør det mulig å lage nettapplikasjoner, og for å ta det i bruk må vi først installere det. Dette gjøres ved å skrive følgende kommando i terminalen (pass på at du er i mappen `express-server`)

```
npm install express --save
```

Ved å kjøre denne kommandoen legger vi til `Express.js` som en avhengighet i prosjektet, og det vil automatisk legges til kode i prosjektet ditt. 

I filen `package.json` blir det lagt til en kodesnutt som gir informasjon om den nye avhengigheten og hvilken versjon som brukes. Dette ser slik ut (tallene bak express er versjonen og kan variere avhengig av når man installerer): 

```json
"dependencies": {
	"express": "^4.18.2"
}
```

I tillegg opprettes det en fil som heter `package-lock.json` og en mappe som heter `node_modules`. Filen `package-lock.json` er laget automatisk, og den skal ikke endres. Den beskriver akkurat hvilke avhengigheter og versjoner som er installert, slik at andre personer kan installere de samme avhengighetene i prosjektet på sin egen pc. Mappen `node_modules` inneholder en kopi av alle avhengigheter som er installert og generes automatisk basert på innholdet i `package-lock.json` filen. 

### Ta i bruk Express.js
Før vi starter oppgavene skal vi sette opp filen `index.js`. 

Start med å lage en fil som heter `index.js` i mappen `express-server`. Deretter skal du fylle inn følgende i filen: 

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

Når du besøker denne siden sender du et kall til api-routingen "/". Dette er endingen på url'en. Siden vi ikke har fortalt serveren hva den skal gjøre når den mottar et slikt kall vil den svare med feilmeldingen `Cannot GET /` som du ser på skjermen. Dette skal vi fikse gjennom oppgavene!

---
## 🏆 Oppgaver

### Oppgave 1 - Sett opp din første routing
For å fjerne feilmeldingen vi får når vi besøker http://localhost:3000/ må vi fortelle serveren hva den skal gjøre når den mottar et kall fra `/`. Dette kan vi gjøre ved å skrive følgende i `index.js` filen: 

```javascript
app.get('/', function(request, response){
	response.send('Hello world!');
});
```

Hvis du refresher (`ctrl` + `r`) nettleserviduet vil du få meldingen "Hello World!" i stedet for feilmeldingen vi fikk tidligere. 

**Hva skjedde nå?**

Når du besøker http://localhost:3000/ sendes det et kall til "/". Dette kallet er en GET-request (forespørsel), det vil si at nettleseren _ber_ om data fra serveren, og med koden har vi fortalt serveren hva den skal sende tilbake om om den mottar et slikt kall.

For å få til dette brukte vi metoden `get()` som tar inn to parametere: routingen ("/") og en funksjon som beskriver hvordan forespørselen skal håndteres. Denne funksjonen tar inn `request` og `response`. `request` er et objekt som inneholder informasjon om forespørselen som er sendt inn, og `response` brukes for å sende et svar tilbake. Vi sendte et svar tilbake ved å skrive `response.send()` og la inn en tekst. 


🏆  Få serveren til å returnere meldingen `"Velkommen til express-workshop"` i stedet for `"Hello world!"`

<details>
<summary>🚨  Løsningsforslag</summary>
Endre hva som står inni `res.send()` så det ser slik ut:

```javascript
app.get('/', function(request, response){
	response.send('Velkommen til express-workshop');
});

```

</details>

---
</br>

### Oppgave 2 - Lag en routing med informasjon om deg selv

🏆  Lag en routing som heter `/meg` og få serveren til å returnere `"Hei jeg heter [ditt navn] og jeg er [din alder] år gammel"`.

Sjekk om det fungerer ved å besøke http://localhost:3000/meg

<details>
<summary>💡  Hint</summary>

Bruk samme fremgangsmetode som oppgave 1. Bytt ut `/` med `/meg` og skriv inn den nye meldingen i `res.send()`.

</details>

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
app.get('/meg', function(request, response){
	response.send('Hei jeg heter Sara og jeg er 24 år gammel');
});
```

</details>

--- 
<br/>

### Oppgave 3 - Lag en routing med varierende informasjon
Nå skal vi lage en routing som tar inn et parameter. Dette gjør at vi kan variere en del av URL-en som besøkes, men få det samme svaret. 

Lim inn koden under i `index.js`: 
```javascript
app.get('/test/:tall', function(request, response){
	response.send(`Du skrev inn tallet ${request.params.tall}`);
});
```

Prøv å besøke http://localhost:3000/test/1 og http://localhost:3000/test/2. Får du samme innhold med varierende tall? 
- Dette er fordi vi har definert en routing hvor deler av den kan varieres. Dette gjorde vi ved å skrive `:tall` i routingen. Ved å skrive `:` foran forteller vi serveren at denne delen er varierende. 

🏆  Lag en routing for `hei/:navn` som returnerer `"Hei [navn]!"`

Tips 💡: 
- Parametere som sendes inn finnes i `request` og du kan få tak i navnet ved å bruke `request.params.navn`. 
- Lagre navnet som kommer inn i en variabel og legg det inn i teksten slik: ``` `Hei ${navn}!` ``` (legg merke til de spesielle fnuttene som brukes).

Prøv å besøke http://localhost:3000/hei/Ola og http://localhost:3000/hei/Kari og sjekk at serveren hilser på de riktige navnene. 

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
app.get('/hei/:navn', function (request, response) {
	const navn = request.params.navn;
	response.send(`Hei ${navn}!`);
});
```

</details>

---
### Oppgave 4 - Hent data fra eksternt API
Denne oppgaven er delt opp i flere deloppgaver.

🏆  Lag en routingen `/fakta` som returnerer meldingen `"Her kommer det snart fakta"`. 

Besøk http://localhost:3000/fakta og se om du får meldingen. 

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
app.get('/fakta', function (request, response) {
	response.send('Her kommer det snart fakta');
});
```

</details>

<br />

🏆  Hent en tilfeldig fakta om katter: 

1. Lag en funksjon med navn `hentFakta()` som returnerer `"Her kommer det snart fakta"`: 
```javascript
function hentFakta() {
	return 'Her kommer det snart fakta';
}
```

2. Bruk denne funksjonen i routingen for `/fakta` som du lagde i stad ved å kalle funksjonen `hentFakta()`:
```javascript
app.get('/fakta', function (request, response) {
	const fakta = hentFakta();
	response.send(fakta);
});
```

3. Nå ønsker vi å bytte ut meldingen `"Her kommer det snart fakta"` med en tilfeldig fakta om katter som vi henter fra https://catfact.ninja/fact. For å gjøre dette bruker vi metoden `fetch()` som lar oss snakke med andre API-er (i nettleser skal du få opp et tomt objekt --> {} ): 
```javascript
function hentFakta() {
	return fetch(`https://catfact.ninja/fact`)
		.then((response) => response.json()) // Gjør svaret om til JSON-format
		.catch((error) => console.log(error)); // Print en feilmelding om noe går galt
}
```

**Dersom du ikke får kjørt serveren se på punkt 1 og 2, hvis ikke hopp til punkt 3: **

Sjekk hvilken node-versjon du bruker ved å skrive dette i terminalen: 
```
node -v
```

Da får du tilbake et svar på formatet `v19.0.1`. Hvis du har en versjon under `v18.0.0` må du gjøre følgende: 

1. Skriv følgende i terminalen (pass på at du er i riktig mappe): 
```
npm install node-fetch@2
```

2. Legg til følgende før funskjonen `hentFakta()` i `index.js`: 
```
const fetch = require(`node-fetch`)
```

3. Hvis du besøker http://localhost:3000/fakta nå vil du kun få se `{}` på skjermen. Dette skjer fordi `fetch()` ikke gir svaret tilbake med en gang, men returnerer en `Promise`. Dette er et objekt som har fått beskjed om å gjennomføre en oppgave (i dette tilfellet å hente en fakta om katter), og når `fetch()` er ferdig inneholder objektet faktaen vi har hentet. Vi kan tenke på dette som at `fetch()` returnerer "Jeg henter fakta" og etter at den har brukt den tiden den trenger for å hente så får vi den faktiske verdien som vi er interessert i. Siden `fetch()` returnerer en verdi med en gang (selv om det ikke er den vi vil ha) får vi aldri tak i faktaen. Vi må derfor be vår funksjon om å *vente* på svar fra `fetch()`. Dette gjør vi ved å gjøre våre funksjoner asynkrone, slik at vi kan si "vent før du fortsetter". 

4. Gjør routingen `/fakta` og `hentFakta()` asynkron og be de om å vente på svar fra `fetch()`. Vi gjør funksjonene asynkrone ved å legge til `async` foran begge funksjoner og ber de om å vente på svar fra `fetch()` ved å legge til `await`.
```javascript
app.get('/fakta', async function (request, response) {
	const fakta = await hentFakta();
	response.send(fakta);
});

async function hentFakta() {
	return await fetch(`https://catfact.ninja/fact`)
		.then((response) => response.json()) 
		.catch((error) => console.log(error));
}
```

Hvis du besøker http://localhost:3000/fakta skal du nå få opp en tilfeldig fakta hentet fra https://catfact.ninja/fact. Meldingen vil se ut noe lignende dette (selve faktaen og lengden vil variere siden det er tilfeldig hva som hentes, men formatet skal være likt): 

```json
{"fact":"70% of your cat's life is spent asleep.","length":39}
```

Dette ser ikke veldig pent ut, og vi er heller interessert i å hente faktaen alene. For å fikse dette må vi endre på hva `hentFakta()` returnerer. Nå returneres et objekt som består av `fact` og `length`. Dette skal vi endre ved å hente ut bare `fact` fra objektet.

5. Fortell funksjonen din at den kun skal returnere `fact` ved å legge til `then((data) => data.fact)` i `hentFakta()` slik at hele funksjonen ser slik ut: 
```javascript
async function hentFakta() {
	return await fetch(`https://catfact.ninja/fact`)
		.then((response) => response.json()) 
		.then((data) => data.fact) 
		.catch((error) => console.log(error));
}
```

Nå satte vi `data` til å være hele objektet som vi så på skjermen i stad, og den består av `fact` og `length`. Vi kan hente ut `fact` fra `data` ved å skrive `fact.data`. 

Hvis du besøker http://localhost:3000/fakta skal du nå få en fakta om katter på skjermen, og hvis du refresher siden får du opp en ny fakta.

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
app.get('/fakta', async function (request, response) {
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
<br/>

### Oppgave 5 - Hent informasjon om temperatur fra Yr.no
Nå skal vi bruke det vi har lært fra de tidligere oppgavene for å hente informasjon om temperatur i ulike byer i Norge fra yr.no. Denne oppgaven er delt opp i flere deloppgaver. 

🏆  Lag routingen `/temperatur/:by`, lagre by i en variabel og returner en melding som sier `"Jeg vil vite været i [by]!"`. 

Hvis du besøker http://localhost:3000/temperatur/oslo skal du få meldingen "Jeg vil vite temperaturen i oslo".

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
app.get('/temperatur/:by', function (request, response) {
	const by = request.params.by;
	response.send(`Jeg vil vite temperaturen i ${by}!`);
});
```

</details>

API-et vi skal hente temperatur-informasjon fra bruker id-er til å finne ut hvilken informasjon som skal returneres. En id (identifikator) er en unik måte å beskrive noe på. For eksempel så har yr gitt Oslo by id-en `1-72837`, og ved å bruke denne id-en vet de akkurat hvilken by de skal lete etter. 

🏆  Bytt ut `:by` med `:id` i routingen fra forrige oppgave og endre slik at det er id som lagres i variabel (`request.params.id` i stedet for `request.params.by`)

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
app.get('/temperatur/:id', function (request, response) {
	const id = request.params.id;
	response.send(`Jeg vil vite temperaturen i by med id ${id}!`);
});
```
</details>

🏆  Lag funksjonen `hentTemperatur(id)` som henter informasjon om været fra yr.no:

1. Lag en funksjon `hentTemperatur(id)` som tar inn en id og returnerer `"Her skal vi finne temperaturen"`: 

```javascript
function hentTemperatur(id) {
	return 'Her skal vi finne temperaturen';
}
```

2. Bruk `hentTemperatur(id)` i routingen `"/temperatur/id"` ved å sende inn id-en du lagret tidligere: 
```javascript
app.get('/temperatur/:id', function (request, response) {
	const id = request.params.id;
	const temperatur = hentTemperatur(id);
	response.send(temperatur);
});
```

3. Skriv om `hentTemperatur(id)` slik at den bruker `fetch()` for å hente data fra yr: 
```javascript
function hentTemperatur(id) {
	return fetch(
		`https://www.yr.no/api/v0/locations/${id}/forecast?api_key=%2Fapi%2Fv0%2Flocations%2F%7BId%7D%2Fforecast`
	)
		.then((res) => res.json())
		.catch((error) => console.log('errors', error));
}
```

Legg merke til at vi sender med `id` i lenken i `fetch()`. Dette er den samme id-en som vi skriver inn i nettadressen som vi besøker når vi går til http://localhost:3000/temperatur/1-72837.

4. Hvis du besøker http://localhost:3000/temperatur/1-72837 nå får du `{}` og ikke informasjon om været. Dette er fordi vi ikke har bedt serveren vår om å vente på svar fra yr. Prøv å løse dette ved å bruke `async` for å gjøre funksjonene asynkrone og `await` for å vente på svar. HINT💡: Se på hvordan vi gjorde det med katte-faktaene.

Om det fungerer vil se noe lignende dette på skjermen: 

<img width="1713" alt="image" src="https://user-images.githubusercontent.com/46678893/211004257-ca4adead-feef-4f8d-a5c4-b5d84c8fce56.png">

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
app.get('/temperatur/:id', async function (request, response) {
	const id = request.params.id;
	const temperatur = await hentTemperatur(id);
	response.send(temperatur);
});

async function hentTemperatur(id) {
	return await fetch(
		`https://www.yr.no/api/v0/locations/${id}/forecast?api_key=%2Fapi%2Fv0%2Flocations%2F%7BId%7D%2Fforecast`
	)
		.then((res) => res.json())
		.catch((error) => console.log('errors', error));
}
```
</details>

<br/>

Nå ønsker vi å presentere dataen fra yr på en måte som gjør det enklere å finne ut dagens temperatur.

Nå får vi veldig mye data fra yr, men vi ønsker kun å finne temperaturen i dag. Dette kan vi gjøre ved å endre på hva vi returnerer fra `hentTemperatur(id)` (slik vi gjorde med katte-faktaen). Da må vi først se litt nærmere på hvordan dataen vi får fra yr ser ut. 

Dataen fra yr inneholder en liste som heter `dayIntervals` som inneholder informasjon om været for den kommende uken. Under kan du se hvordan det ser ut (vi har fjernet litt for å gjøre det litt mer oversiktlig, dette er byttet ut med `...`):

```json
{
	"start": "2023-01-06T12:00:00+01:00",
	"end": "2023-01-06T23:00:00+01:00",
	"temperature": { "value": -2.2, "min": -2.4, "max": -1.7 },
	"wind": { "min": 3.3, "max": 4.8, "maxGust": 11 }
    ...
}
```

Vi ønsker å hente ut informasjonen som ligger i `temperature` som vi kan gjøre ved å legge koden under mellom `.then((res) => res.json())` og `.catch((error) => console.log('errors', error));`: 

```javascript
.then((data) => data.dayIntervals[0].temperature)
```

Når vi skriver `data.dayIntervals[0].temperature` får vi tilbake et objekt som inneholder informasjon om dagens temperaturer. Dette ser slik ut: 

```json
{
	"value": -2.2,
	"min": -2.4,
	"max": -1.7
}
```

Det vi har gjort er å hente ut kun den informasjonen vi er interessert i. Under finner du en kort forklaring på hvordan det vi har skrevet fungerer:

- `data.dayIntervals` henter ut listen `dayIntervals` fra all dataen vi har fått fra yr. Denne består av informasjon om været flere dager. 
- `data.dayIntervals[0]` henter ut informasjonen om været i dag fra liste `dayIntervals`. Vi får dagens vær fordi denne ligger først i listen, og vi har sagt at vi ønsker å få det som ligger først ved å skrive `[0]`. Om vi hadde ønsket været for i morgen kunne vi skrevet `data.dayIntervals[1]`. Legg merke til at vi begynner å telle på 0 og ikke 1, det vil si at 0 er det første, og 1 er det andre osv...
- `data.dayIntervals[0].temperature` henter ut informasjonen om temperatur for dagen i dag og resultatet er det som ble vist tidligere. Hvis vi ville hatt informasjon om vinden i stedet kunne vi skrevet `data.dayIntervals[0].wind`

🏆  Endre funksjonen `hentTemperatur(id)` slik at den kun returnerer data om temperaturen i dag ved å legge inn `.then((data) => data.dayIntervals[0].temperature)`

Besøk http://localhost:3000/temperatur/1-72837 og sjekk at du får tilbake `{"value":-2.1,"min":-2.4,"max":-1.7}`. OBS: tallene vil være annerledes enn i denne teksten fordi de ble hentet 6. januar. 

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
async function hentTemperatur(id) {
	return await fetch(
		`https://www.yr.no/api/v0/locations/${id}/forecast?api_key=%2Fapi%2Fv0%2Flocations%2F%7BId%7D%2Fforecast`
	)
		.then((res) => res.json())
		.then((data) => data.dayIntervals[0].temperature)
		.catch((error) => console.log('errors', error));
}
```
</details>

<br/>

🏆  Endre routingen for `/temperatur/:id` slik at den returnerer teksten `"Temperatur nå: [value], minste temperatur: [min temperaturen], maks temperatur: [maks temperaturen]"`. Sjekk hintet om du er usikker på hvordan du henter ut de ulike gradene eller hvordan det kan legges til i teksten. 

Besøk http://localhost:3000/temperatur/1-72837 og sjekk været i Oslo for i dag. 

<details>
<summary>💡  Hint </summary>

Du kan hente ut gradene ved å skrive `temperatur.min` og `temperatur.max`. 

Du kan legge inn dette i teksten ved å bruke de spesielle fnuttene ``` `` ``` og putte det innenfor `${}` som dette eksempelet: ``` `Min temp: ${temperatur.min}` ```
</details>

<details>
<summary>🚨  Løsningsforslag</summary>

```javascript
app.get('/temperatur/:id', async function (request, response) {
	const id = request.params.id;
	const temperatur = await hentTemperatur(id);
	response.send(
		`Temperatur nå: ${temperatur.value}, minste temperatur: ${temperatur.min}, maks temperatur: ${temperatur.max}`
	);
});
```
</details>

<br/>

🏆  Sjekk været i Trondheim ved å bruke id `1-211102`

Hvis du ønsker å sjekke været et annet sted kan du finne id-en til stedet ved å: 
1. Gå til yr.no
2. Søk opp stedet du ønsker å bruke
3. Se på URL-en: id-en er på formatet `x-xxxxx` og står etter "https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/daglig-tabell/" 

For Bergen ser URL-en slik ut https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/1-92416/Norge/Vestland/Bergen/Bergen og id-en er da `1-92416`.
