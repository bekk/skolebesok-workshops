# Workshops

# Animasjoner

I denne oppgaven skal du prøve å få hunden Pelle til å bevege seg på skjermen ved bruk av animasjoner i CSS.

Pelle er klar til å bevege seg, og logrer allerede med halen. [Koden finner du her](https://codepen.io/sarahjelle/pen/yLqJree)

## Kort om animasjoner i CSS
### @keyframes
Keyframes brukes for å definere stiler for ulike punkter i en animasjon. Hvert slikt punkt kalles en `keyframe`. I eksempelet under brukes `@keyframes` til å beskrive en animasjon hvor bakgrunnen starter som rød (from) og slutter som gul (to). 

```
@keyframes bytt-farge {
	from {
		background-color: red;
	}
	to {
		background-color: yellow;
	}
}
```
Hvis du ønsker å legge inn flere steg i animasjonen kan du bytte ut `from` og `to` med prosent. Da vil `0%` være starten på animasjonen og `100%` slutten. Eksempelet under vil starte som rød, bli gul halvveis og til slutt bli grønn. 
```
@keyframes bytt-farge {
	0% {
		background-color: red;
	}
	50% {
		background-color: yellow;
	}
	100% {
		background-color: green;
	}
}
```


### Bruke animasjonene


### Oppgave 1
Få 

## Backend

I denne oppgaven skal du få lage din egen server for å hente tilfeldige vitser fra nettet. 

## Frontend

I denne oppgaven skal du bruke rammeverket svelte.js for å lage en nettside som viser frem vitser. 

## Animasjoner

I denne oppgaven skal du prøve å få en hund til å logre på skjermen
