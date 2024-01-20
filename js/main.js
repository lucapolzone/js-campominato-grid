//### Funzioni

// funzione "genera-cella"
function createBox(text) {
  //Crea elemento div
  let box = document.createElement("div");

  //Assegna la classe "box"
  box.classList.add("box");

  //Aggiungi il numero, prima usavo uno span, ora è il numero direttamente
  box.innerText = text;

  //Toggle
  box.addEventListener("click", function() {
    box.classList.toggle("clicked");
    console.log(box.innerText);
  });

  return box;
}



// funzione "genera-griglia"
function createGrid(container) {
  container.innerHTML = ''; //questa mi fa svuotare il container perché altrimenti le griglie da 100 si aggiungono, una sotto l'altra

  for (let i = 1; i <= 100; i++) {
    
    let grid = createBox(i); //ha richiamato la funzione sopra che fa tutte le sue operazioni e poi ritorna box. Quindi box ora viene inserita in grid 100 volte

    //ora la costante grid deve essere inserita nel container
    container.append(grid);
  }
}


//### Richiamo le funzioni


// richiamo l'elemento html container della griglia
const gridContainer = document.getElementById("container");
const button = document.getElementById("button");


// Aggiungo la funzione all'evento sul bottone
button.addEventListener("click", function() {
  createGrid(gridContainer); //la funzione createGrid(container) è stata popolata con la const gridContainer
});
