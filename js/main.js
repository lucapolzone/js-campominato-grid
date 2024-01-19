// richiamo l'elemento html container della griglia
const gridContainer = document.getElementById("container");
//* prima funzione: genera griglia
// function generateGrid(container){
  // console.log(container); // ...dovrei visualizzare questo: <div id="container"></div>
  // .....
  // .....
  // .....
//};
//generateGrid(gridContainer);

//*seconda funzione: genera cella




const button = document.getElementById("button");


//aggiungo la funzione all'evento sul bottone
button.addEventListener("click", function() {
  for(i = 0; i < 100; i++) {
    //crea elemento div
    let box = document.createElement("div"); 

    //assegna classe box quindi diventa: <div class="box"></div>
    box.classList.add("box");
    
    //qua gli va a inserire il numero con uno span. + 1 perché le celle mi partono da 0 
    box.innerHTML += `<span>${i+1}</span>`;

    //toggle
    box.addEventListener("click", function(){
      box.classList.toggle("clicked");
      // this.classList.toggle("clicked");
      
      console.log(box.querySelector("span").innerText);
      // console.log(this.querySelector("span").innerText);

    });
    

    //
    gridContainer.append(box);
  }

});


