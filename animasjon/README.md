# Animasjon

I denne workshoppen skal du prøve å få hunden Pelle til å bevege seg på skjermen ved bruk av animasjoner i CSS.

## Kort om animasjoner i CSS
Nå skal vi se litt på hvordan man kan lage animasjoner med CSS. Underveis kommer det til å være en del eksempler, og om du ønsker å se hvordan dette ser ut underveis kan du sjekke det ut [HER](https://codepen.io/sarahjelle/pen/yLqJree)

### @keyframes

Keyframes brukes for å definere stiler for ulike punkter i en animasjon. Hvert slikt punkt kalles en `keyframe`. I eksempelet under brukes `@keyframes` til å beskrive en animasjon hvor bakgrunnen starter som rød (from) og slutter som gul (to).

```css
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

```css
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

Hvis du ønsker at elementene skal bevege seg på skjermen kan man bruke `transform` som kan brukes for å rotere og flytte elementer.

**Rotere**

For å rotere et element bruker man `rotate(grader)` og fyller inn hvor mange grader man ønsker at elementet skal rotere. Eksempelet under lager en rotasjon på 180 grader, som vil si at elementet snus på hode 🙃.

```css
transform: rotate(180deg);
```

**Flytte**

For å flytte et element bruker man `translate(x,y)` for å definere den nye posisjonen til elementet, slik man ville gjort i et koordinatsystem. Hvis man kun ønsker å flytte elementet til venstre eller høyre (langs x-aksen) kan man bruke `translateX(x)` og om man kun ønsker å flytte elementet opp og ned (langs y-aksen) kan man bruke `translateY(y)`. Verdiene man sender inn kan både være i piksler og prosent:

```css
transform: translate(100px,100px); /* Flytter elementet 100px til høyre og 100px ned */
transform: translate(50%, 50%); /* Flytter elementet 50% til høyre og 50% ned */
transform: translateX(100px); /* Flytter elementet 100px til høyre */
transform: translateX(50%); /* Flytter elementet 50% til høyre */
transform: translateY(100px); /* Flytter elementet 100px ned*/
transform: translateY(50%); /* Flytter elementet 50% ned*/
```

**Flere stiler per steg**

For hvert steg i keyframen kan man legge til så mange stiler man ønsker. For eksempel kan man legge til en forflytning (translate) på eksmepelet fra i stad. Nå vil elementet både bytte farge og bevege seg 100px frem og tilbake langs x-aksen:

```css
@keyframes bytt-farge-og-flytt {
	0% {
		background-color: red;
		transform: translateX(0px);
	}
	50% {
		background-color: yellow;
		transform: translateX(100px);
	}
	100% {
		background-color: green;
		transform: translateX(0px);
	}
}
```

### Bruke animasjonene

Nå har vi lært hvordan vi kan bruke `@keyframes` for å styre utseende til animasjon, og nå skal vi lære hvordan man kan legge til animasjonen på et element og styre andre detaljer ved animasjonen.

-   **animation-name** brukes for å definere hvilken `@keyframes` som brukes på elementet.
-   **animation-duration** brukes for å definere hvor lenge en sekvens (`@keyframes`) skal vare. Hvor lang tid elementet skal bruke fra start (0%) til slutt (100%).
-   **animation-iteration-count** brukes for å definere hvor mange ganger elementet skal gjennomføre sekvensen.


## Emoji-guide
Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- 🏆 Oppgave: Her er hva du skal gjøre
- 💡 Tips: Litt ekstra info som kan være greit å ha for å løse en oppgave
- 🚨 Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du _kan_ løse oppgaven

## Oppgaver
Pelle er klar til å bevege seg, og logrer allerede med halen. [Koden finner du her](https://codepen.io/sarahjelle/pen/eYjzXqZ), og du trenger kun å gjøre endringer i CSS-filen. 

---

### Oppgave 1 - Få halen til å logre raskere
Det er allerede lagt til animasjon på halen til felle. Dette er gjort ved å lage en `@keyframes` med navn `beveg-hale` og bruke denne i `.hale`. 

🏆 Få halen til å logre raskere ved å endre på varigheten til animasjonen. 

<details>
<summary>💡 Hint</summary>
Endre på antall sekunder halen skal bruke på å bevege seg frem og tilbake i `animation duration`.

</details>

<details>
<summary>🚨 Løsningsforslag</summary>

```css
.hale {
	animation-name: beveg-hale; 
	animation-duration: 0.5s; 
	transform-origin: bottom left; 
	animation-iteration-count: infinite; 
}
```

</details>

---

### Oppgave 2 - Legg til animasjon på ørene
Vi ønsker at Pelle skal bevege ørene, og dette kan vi få til ved å rotere de på samme måte som vi har rotert halen. Det er alt laget animasjonssekvens med navn `roter-ører` og du skal nå bruke denne i `.ører` klassen ved å følge stegene under: 

1. Sett `animation-name` til å bruke `roter-ører`.
2. Sett `animation-duration` til å være 1s.
3. Få animasjonen til å vare evig ved å sette `animation-iteration-count` til `infinite`.
4. Sett rotasjonspunktet til midten ved å sette `transform-origin` til `center`.

<details>
<summary>🚨 Løsningsforslag</summary>

```css
@keyframes roter-ører {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(1deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

.ører {
	animation-name: roter-ører;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	transform-origin: center;
}
```

</details>

---

### Oppgave 3 - Legg til animasjon på tungen 
Vi ønsker at Pelle skal bevege tungen opp og ned. Det er alt laget en animasjonssekvens med navn `beveg-tunge`. Legg merke til at denne bruker `transformY` fordi vi ønsker at tungen skal bevege seg langs y-aksen (opp og ned) 

🏆 Få tungene til å bevege seg ved å redigere klassen `.tunge`: 

1. Sett `animation-name` til å være `beveg-tunge`.
2. Sett varigheten på animasjonen til 1 sekund (`animation-duration`)
3. Få animasjonen til å vare evig ved å sette 

<details>
<summary>🚨 Løsningsforslag</summary>

```css
@keyframes beveg-tunge {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(2px);
	}
	100% {
		transform: translateY(0px);
	}
}

.tunge {
	animation-name: beveg-tunge;
	animation-duration: 1s;
	animation-iteration-count: infinite;
}
```

</details>

---

### Oppgave 4 - Legg til animasjon på Pelle
Nå ønsker vi at Pelle skal bevege seg frem og tilbake på skjermen. Dette skal gjøres ved å først lage en animasjonsekvens som beskriver hvordan Pelle skal bevege seg. 

🏆 Lag animasjonsekvensen ved å bruke `transform: translateX(x)` til å definere hvor på skjermen Pelle skal være. 
- Du kan selv velge hvor langt du ønsker at Pelle skal gå ved bruke piksler eller prosent.
<details>
<summary>💡 Hint</summary>
For å få Pelle til å gå frem og tilbake over hele skjermen kan du følge stegene: 

1. Fyll inn `transform: translateX(0%)` start og slutt (0% og 100%)
2. Fyll inn 1. Fyll inn `transform: translateX(100%)` i midten (50%)
</details>  
    
<br/> 

🏆 Få Pelle til å bevege seg raskere frem og tilbake. 

<details>
<summary>💡 Hint</summary>

For å få Pelle til å gå saktere kan du endre på `animation-duration` 

</details>  

<br/> 

🏆 Endre retningen til Pelle slik at han ikke begynner å gå baklengs. 

<details>
<summary>💡 Hint</summary>

Du kan få Pelle til å starte på høyre side ved å begynne og slutte ved 100% (eller ønsket antall piksler) og være ved 0% på midten.  

</details>  

<details>
<summary>🚨 Løsningsforslag</summary>

```css
@keyframes beveg-pelle {
	0% {
		transform: translateX(100%);
	}

	50% {
		transform: translateX(0%);
	}

	100% {
		transform: translateX(100%);
	}
}

.pelle {
	animation-name: beveg-pelle;
	animation-duration: 40s;
	animation-iteration-count: infinite;
}
```

</details>

---

### Oppgave 5 - Animer beina

🏆 Få det til å se ut som beveger seg ved å fylle ut animasjonsekvensen med navn `beveg-bein`. Beina skal rotere fra `2deg` til `-2deg` og tilbake til `2deg`.

<details>
<summary>💡 Hint</summary>

1. Lag de nødvendige stegene (0%, 50% og 100%)
2. Bruk `transform: rotate(x)` og fyll inn riktige grader. 

Du kan også se tilbake på hvordan du gjorde det med ørene halen. 

</details>  

<summary>🚨 Løsningsforslag</summary>

```css
@keyframes beveg-bein {
	0% {
		transform: rotate(2deg);
	}

	50% {
		transform: rotate(-2deg);
	}

	100% {
		transform: rotate(2deg);
	}
}

.pelle {
	animation-name: beveg-pelle;
	animation-duration: 40s;
	animation-iteration-count: infinite;
}
```

</details>

### Oppgave 5 - Animer beina ulikt
Hunder pleier ikke å bevege alle beina helt likt, så for å få animasjonen til å se mer naturlig ut kan vi animere beina på ulike måter. Vi ønsker at to og to bein skal bevege seg likt (høyre forben + venstre bakben og venstre forben + høyre bakben)

🏆 Animer beina slik at de beveger seg ulikt: 
1.  Lag en ny animasjonsseksvens som roterer motsatt av `beveg-beina` (begynn på -2 grader).
2. Legg inn den nye animasjonssekvensen i klassen `.høyre-bakben` og `.venstre-forben`.

<details>
<summary>🚨 Løsningsforslag</summary>

```css
@keyframes beveg-bein2 {
	0% {
		transform: rotate(-2deg);
	}

	50% {
		transform: rotate(2deg);
	}

	100% {
		transform: rotate(-2deg);
	}
}

.høyre-bakben {
	animation-name: beveg-bein2;
}

.venstre-forben {
	animation-name: beveg-bein2;
}
```

</details>
