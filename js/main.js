//### Variabili globali
let bombElements = [];
const bombs = createBombElements(16, 100) //min, max


//### Richiamo le funzioni


// richiamo l'elemento html container della griglia
const gridContainer = document.getElementById("container");
const button = document.getElementById("button");


// Aggiungo la funzione all'evento sul bottone
button.addEventListener("click", function() {
  createGrid(gridContainer); //la funzione createGrid(container) è stata popolata con la const gridContainer
});


/* =================================================== 

=================================================== */


//### FUNZIONI

//### Funzione "genera-cella"
function createBox(text, bombElements) {
  //Crea elemento div
  let box = document.createElement("div");

  //Assegna la classe "box"
  box.classList.add("box");

  //Aggiungi il numero, prima usavo uno span, ora è il numero direttamente
  box.innerText = text; //text = i

  //*Toggle sulla cella
  box.addEventListener("click", function() {

    if(!isGameOver) {
      if(!bombElements.includes(text)) {
        box.classList.toggle("clicked");
    // this.classList.toggle("clicked");
      } else {
        box.classList.add("bomb-found"); //o viceversa?
        isGameOver = true;
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
    
    let grid = createBox(i, bombElements); //ha richiamato la funzione sopra che fa tutte le sue operazioni e poi ritorna box. Quindi box ora viene inserita in grid 100 volte

    //ora la costante grid deve essere inserita nel container
    container.append(grid);
  }
}


//===================================================

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
