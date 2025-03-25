var nm1 = document.querySelector("input#inumber");
var nm2 = document.querySelector("input#inumber2");
var resultado = document.querySelector("p.resultado"); // Changed to p.resultado

var botao = document.querySelector("input.butão"); // Get the button

botao.addEventListener("click", somar); // Add event listener to the button

function somar() {
  var n1 = Number(nm1.value);
  var n2 = Number(nm2.value);
  var soma = n1 + n2;
  resultado.innerHTML = `O resultado é: ${soma}`;
}
