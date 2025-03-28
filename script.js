var butão = document.querySelector("input#ibutton");

var resultado = document.querySelector("p.resultado");

function result (){
    resultado.innerHTML = ("O resultado é: Usuario já existe");
}

butão.addEventListener("click", result);
