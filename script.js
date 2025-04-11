var fundo = document.querySelector("body");
var cback = document.querySelector("h1.cback");
var button = document.querySelector("button.botao");

function mudarcor() {
    var valor = Math.floor(Math.random() * 9) + 1;

    if (valor == 1) {
        fundo.style.backgroundColor = "red";
    } else if (valor == 2) {
        fundo.style.backgroundColor = "blue";
    } else if (valor == 3) {
        fundo.style.backgroundColor = "yellow";
    } else if (valor == 4) {
        fundo.style.backgroundColor = "green";
    } else {
        fundo.style.backgroundColor = "black";
        button.style.color = "white"
        
    }

 
}

button.addEventListener("click", mudarcor);


