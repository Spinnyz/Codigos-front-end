/*Game alert*/
alert ("Bem vindo ao adivinhe");
prompt("Digite seu nome");
prompt("Digite sua idade");
alert("Seja bem vindo ao jogo de adivinhação");
if(confirm("Deseja jogar?")){
    alert("Vamos começar");
    var numero = Math.floor(Math.random() * 10);
    var tentativas = 10;
    var chute = parseInt(prompt("Digite um número de 0 a 10"));
    while(tentativas > 0){
        if(chute == numero){
            alert("Parabéns, você acertou!");
            break;
        }else if(chute < numero){
            alert("O número é maior");
            tentativas--;
        }else if(chute > numero){
            alert("O número é menor");
            tentativas--;
        }
        chute = parseInt(prompt("Digite um número de 0 a 10"));
    }
    if(tentativas == 0){
        alert(" o número era " + numero);
    }

}

