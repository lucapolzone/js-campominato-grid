# Esercizio: Griglia Campo Minato (18/01/2024)
nome repo: `js-campominato-grid`

# Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.<br>
Ogni cella ha un numero progressivo, da 1 a 100.<br>
Ci saranno quindi 10 caselle per ognuna delle 10 righe.<br>
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Bonus

Aggiungere una "select" accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe

## Consigli del giorno 

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

### Ad esempio<br>
Di cosa ho bisogno per generare i numeri?<br>
Proviamo sempre prima con dei `console.log()` per capire se stiamo ricevendo i dati giusti.<br>
Le validazioni e i controlli possiamo farli anche in un secondo momento.


# Esercizio: Campo Minato (19/01/2024)
stessa nome repo: `js-campominato-grid`

# Consegna
Partiamo da quanto fatto già ieri, quindi lavoriamo nella stessa repo.

## Step 1 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

## Step 2
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

## Step 3
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

## Bonus 1

Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.

## Bonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.