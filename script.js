var namo = prompt("Hello, What's your name?");
var idade = prompt("How old are you?");
var email = prompt("What's your email?");
var password = prompt("What's your password?");

var welcome = document.querySelector("p.Bem-vindo");
welcome.innerText = `Bem vindo ${namo}`;

var le = document.querySelector ("p.name")
le.innerText = `Seu nome tem ${namo.length} caracteres`;

var age = document.querySelector("p.age")
age.innerText = `Você tem ${idade} anos`;

var emai = document.querySelector("p.email")
emai.innerText = `Seu email é ${email}`;

var pass=

