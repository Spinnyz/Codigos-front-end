var name = prompt("Hello, What's your name?");
var idade = prompt("How old are you?");
var email = prompt("What's your email?");
var password = prompt("What's your password?");

var welcome = document.querySelector("p.Bem-vindo");
welcome.innerText = `Bem vindo ${name}`;

var le = document.querySelector ("p.name")
le.innertext = `Seu nome tem ${name.length} caracteres`;

var age = document.querySelector("p.age")
age.innerText = `Você tem ${idade} anos`;

