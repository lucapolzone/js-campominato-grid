//### Variabili globali
let bombElements = [];
const bombs = createBombElements(16, 100) //min, max
let score = 0;
let numberOfCells = 100;

//### Richiamo le funzioni

// richiamo l'elemento html container della griglia
const gridContainer = document.getElementById("container");
const button = document.getElementById("button");

createGrid(gridContainer); //la funzione createGrid(container) è stata popolata con la const gridContainer

// Aggiungo la funzione all'evento sul bottone
button.addEventListener("click", function() {
  createGrid(gridContainer);
  isGameOver = false; //alla pressione del testo play isGameOver torna false
});


/* =============================================== 

  ### FUNZIONI

================================================= */

//### Funzione numero random
//funzione che contiene il Math.floor(Math.random())
//genero un numero casuale tra min e max, quindi da 1 a 100
function getRandomNumber(min, max) {

  // return Math.floor((Math.random() * 100) + 1);
  return Math.floor(Math.random() * ((max + 1) - min) + min); 
  // max - min è la sottrazione che mi da l'intervallo da 1 a 100. 
  // + 1 a max include max nell'intervallo. 
  // + min finale include min nell'intervallo
  
  }
  
//===================================================

//### Funzione per generare lista bombe


function createBombElements(bombs, numberOfCells) {
  //inizializzo a vuoto un array

    //while (bombElements.length < 16)
    while (bombElements.length < bombs) {
      
      const randomInt = getRandomNumber(1, numberOfCells); //quindi da 1 a 100
      //includes si può leggere "se è gia incluso"
      if (!bombElements.includes(randomInt)) {
        //push aggiunge un nuovo elemento all'array
        bombElements.push(randomInt);
      }
    }
  
    return bombElements;
    
}

//===================================================

//### Funzione "genera-cella"
/**
 * @param {index} text text = i
 * @param {number} bombsEl variabile bombElements
*/

function createBox(text, bombsEl) {
  //Crea elemento div
  let box = document.createElement("div");

  //Assegna la classe "box"
  box.classList.add("box");

  //Aggiungi il numero, prima usavo uno span, ora è il numero direttamente
  box.innerText = text;

  //*Toggle sulla cella
  box.addEventListener("click", function() {
    // se il gioco non è finito
    if(!isGameOver) {
      if(!bombsEl.includes(text)) {
        box.classList.toggle("clicked");
    // this.classList.toggle("clicked");
        score++
        if(score == numberOfCells - bombElements.length){
          alert("HAI VINTO! Il tuo punteggio è " + score)
          isGameOver = true;
          score = 0;
        }

      } else {
        box.classList.add("bomb-found");
        alert("GAME OVER! Il tuo punteggio è " + score);
        isGameOver = true;
        score = 0;
      }
      
    }
  });

  return box;
}

let isGameOver = false;

//===================================================

//### Funzione "genera-griglia"
function createGrid(container) {
  container.innerHTML = ''; //questa mi fa svuotare il container perché altrimenti le griglie da 100 si aggiungono, una sotto l'altra

  for (let i = 1; i <= 100; i++) {
    
    let grid = createBox(i, bombElements); //ha richiamato la funzione sopra che fa tutte le sue operazioni e poi ritorna box. Quindi box ora viene inserita in grid 100 volte. I parametri di createBox ora sono popolati

    //ora la costante grid deve essere inserita nel container
    container.append(grid);

  }
}


