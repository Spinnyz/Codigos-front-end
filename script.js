var butão = document.querySelector("input#ibutton");

var resultado = document.querySelector("p.resultado");


function result (){
    var valor1 = document.querySelector("input#inumber1");

    var valor2 = document.querySelector("input#inumber2");

    var v1 = Number(valor1.value);

    var v2 = Number(valor2.value);

    var s = v1 + v2;

    resultado.innerHTML = `O resultado da soma entre ${v1} e ${v2} é igual a: ${s}`;
} 

butão.addEventListener("click", result);
