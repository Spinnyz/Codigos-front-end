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