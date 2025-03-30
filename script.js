
//Calculadora simples

//Puxando as operações
var bsoma = document.querySelector("input#isoma");
var bsub = document.querySelector("input#isub");
var bmult = document.querySelector("input#imult");
var bdiv = document.querySelector("input#idiv");

//Puxando o resultado
var resultado = document.querySelector("p.resultado");
var valor1 = document.querySelector("input#inumber1");
var valor2 = document.querySelector("input#inumber2");

function soma() {
    var v1 = Number(valor1.value);
    var v2 = Number(valor2.value);
    var s = v1 + v2;
    resultado.innerHTML = `O resultado da soma entre ${v1} e ${v2} é igual a: ${s}`;
}

bsoma.addEventListener("click", soma);

function sub(){
    var v1 = Number(valor1.value);
    var v2 = Number(valor2.value);
    var s = v1 - v2;
    resultado.innerHTML = `O resultado da subtração entre ${v1} e ${v2} é igual a: ${s}`;
}

bsub.addEventListener("click", sub);

function mult(){
    var v1 = Number(valor1.value);
    var v2 = Number(valor2.value);
    var s = v1*v2;
    resultado.innerHTML = `O resultado da multiplicação entre ${v1} e ${v2} é igual a: ${s}`;
}

bmult.addEventListener("click", mult)

function div(){
    var v1 = Number(valor1.value);
    var v2 = Number(valor2.value);
    var s = v1/v2;
    resultado.innerHTML = `O resultado da divisão entre ${v1} e ${v2} é igual a: ${s}`;
}

bdiv.addEventListener("click", div)

