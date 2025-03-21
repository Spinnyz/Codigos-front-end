var name = prompt("Hello, What's your name?");
var idade = prompt("How old are you?");
var email = prompt("What's your email?");
var password = prompt("What's your password?");

var welcome = document.querySelector("p.Bem-vindo");
welcome.innerText = `Bem vindo ${name}`;
