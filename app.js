//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo =  document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10';

let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto()
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute () {
    let chute = document.querySelector ('input').value;
    console.log(numeroSecreto);
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Parabéns, acertou!!');
        exibirTextoNaTela ('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
            exibirTextoNaTela ('h1', 'Errou!')
            exibirTextoNaTela('p', 'O número secreto é maior');
    }
        }
        tentativas++
        limparCampo();
}
function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}
function gerarNumeroSecreto(numeroSecreto){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados = []
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }
}
function reiniciarJogo () {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo ();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}


