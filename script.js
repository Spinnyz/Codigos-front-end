var butão = document.querySelector("input#ibutton");

var resultado = document.querySelector("p.resultado");

var valor1 = document.querySelector("input#number1");

var valor2 = document.querySelector("input#number2");

var soma = Number(valor1.value) + Number(valor2.value);

function result (){
    resultado.innerHTML = `O resultado é ${soma}`;
}

butão.addEventListener("click", result);
