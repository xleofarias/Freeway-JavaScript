//Códigos do Ator

let xAtor = 85;
let yAtor = 368;
let comprimentoAtor = 30;
let alturaAtor = 25;
let velocidadeDoAtor = 3;
let colisao = false;
let meusPontos = 0;

function mostraAtor () {
  image (imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);

}

function movimentoDoAtor () {
  if (keyIsDown(UP_ARROW)){
     yAtor -= velocidadeDoAtor
  }
  
  if (keyIsDown(DOWN_ARROW)){
     if(podeSeMover()) { 
    yAtor += velocidadeDoAtor
     }
  }
  
}

function verificaColisao () {  
  for (let i = 0; i < imagemCarros.length; i += 1) { 
   colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)  
  if(colisao) {
    voltaAtorParaPosicaoInicial ();
    somDaColisao.play(0,1,0.5);
    if(pontosMaiorQueZero()) {
    meusPontos -= 1;
      
      }
    }
  }
}

function voltaAtorParaPosicaoInicial()  {
  yAtor = 368;

} 

function incluiPontos() {
  stroke (107)
  textAlign(CENTER)
  fill (color(107,0,0))
  textSize(25)
  text(meusPontos, width / 5, 25)
  
}

function marcaPontos() {
  if (yAtor < 15) {
    meusPontos += 1
    voltaAtorParaPosicaoInicial ();
    somDoPonto.play(0,1,0.5);
 
  }
}

function pontosMaiorQueZero () {
  return meusPontos > 0
  
}

function podeSeMover () {
    return yAtor < 368 

}
  
