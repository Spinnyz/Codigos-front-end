var nm1 = document.querySelector("input#inumber");
var nm2 = document.querySelector("input#inumber2");
var resultado = document.querySelector("input.resultado");

function somar() {
    var n1 = Number(nm1.value);
    var n2 = Number(nm2.value);
    var r = n1 + n2;
}

document.querySelector("button").addEventListener("click", somar);