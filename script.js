var ikm = document.querySelector("input#ikm");
var bkm = document.querySelector("input#ienviar");
var vatual = document.querySelector("#velocidade");

function resultado() {
    var velocidade = Number(ikm.value); 
    vatual.innerHTML = `Sua velocidade é de ${velocidade} Km/h`; 
}

bkm.addEventListener("click", resultado);
