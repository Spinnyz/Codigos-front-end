alert ("Welcome to a your new job");
var name = prompt ("Whats is your name?");
var age = prompt ("How old are you?");
var money = prompt ("How much  salary do you want do receive?");
var x= Number(age) - Number (2025)

document.write (`For confirm, your name is ${name} your name have ${name.length} <br> in  upperscale is ${name.toUpperCase()} <br> in lowercase is ${name.toLowerCase()} <br> your age is ${age} then your born in ${x} <br and how much salary to want is ${money.toLocaleString ("pt-BR", {style:"currency", currency: "BRL"})}`)