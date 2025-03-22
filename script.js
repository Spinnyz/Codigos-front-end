var a = document.querySelector("div#area");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", sair);
a.addEventListener("mousemove", mover);
a.addEventListener("mousedown", apertar);
a.addEventListener("mouseup", soltar);


function clicar (){
    var int = document.querySelector("div#area");
    int.innerHTML = "Clicou!";
    int.style.background = "red";
    
}

function entrar (){
    var int = document.querySelector("div#area");
    int.innerHTML = "Entrou!";
    int.style.background = "green";
}

function sair (){
    var int = document.querySelector("div#area");
    int.innerHTML = "Saiu!";
    int.style.background = "blue";
}

function mover (){
    var int = document.querySelector("div#area");
    int.innerHTML = "Moveu!";
    int.style.background = "yellow";
}

function apertar (){
    var int = document.querySelector("div#area");
    int.innerHTML = "Apertou!";
    int.style.background = "black";
}

function soltar (){
    var int = document.querySelector("div#area");
    int.innerHTML = "Soltou!";
    int.style.background = "white";
}