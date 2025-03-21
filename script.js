var namo = prompt("Hello, What's your name?");
var idade = prompt("How old are you?");
var mail = prompt("What's your email?");
var assword = prompt("What's your password?");

var welcome = document.querySelector("p.Bem-vindo");
welcome.innerText = `Bem vindo ${namo}`;

var le = document.querySelector ("p.name")
le.innerText = `Seu nome tem ${namo.length} caracteres`;

var age = document.querySelector("p.age")
age.innerText = `Você tem ${idade} anos`;

var emai = document.querySelector("p.email")
emai.innerText = `Seu email é ${mail}`;

var pass= document.querySelector("p.password")
pass.innerText = `Sua senha é ${assword}`;

