var a = document.querySelector("div#area");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", sair);
a.addEventListener("mousemove", mover)


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

function mover(){
    var int = document.querySelector ("div#area");
    int.innerHTML = "Moveu!";
    int.style.background = "yellow"
}
