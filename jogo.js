
var altura = 0
var largura = 0
var vidas = 1
var tempo = 20

var criaMosquitoTempo = 1500

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal'){
    criaMosquitoTempo = 2500;
}else if(nivel === 'normal') {
    criaMosquitoTempo = 2000;
}else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 1000;

}

// funcção para capturar a dimensiomento da browser
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval( function() {
    tempo -=1 ;

    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000)

// Função para randomizar o mosquito

function posicaoRandomica() {

    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        // console.log('O elemento selecionado foi: v' + vidas)
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{        
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png";
        }
            vidas++
    }
    
    // criardo as variaveis para armazenamento dos eixos X e Y randomicos/aleatórios
    var posicaoX = parseInt(Math.random() * largura) - 200;
    var posicaoY = parseInt(Math.random() * altura); - 200;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)


    // Criar o elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    mosquito.className = tamanhoAleatorio() +" " + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosquito);
}


// Função do tamanho aleatório do mosquito

function tamanhoAleatorio() {
    var classe = parseInt(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// Função do lado do mosquito aleatório

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}