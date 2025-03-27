var passa = document.querySelector("div.teste")

function entra() {
    passa.style.backgroundColor = "red"
    passa.innerHTML = "Entrou"
}

passa.addEventListener("mouseover", entra)


function sai (){
    passa.style.backgroundColor = "blue"
    passa.innerHTML= "Saiu"
}

passa.addEventListener("mouseout", sai)

function clica (){
    passa.style.backgroundColor = "green"
    passa.innerHTML= "soltou"
}

passa.addEventListener("click", clica)

function solta (){
    passa.style.backgroundColor = "yellow"
    passa.innerHTML= "Clicou"
}

passa.addEventListener("mouseup", solta)

function pressiona (){
    passa.style.backgroundColor = "purple"
    passa.innerHTML= "Pressionou"
}

passa.addEventListener("mousedown", pressiona)