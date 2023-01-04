//Códigos das Imagens e sons do Jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

let somDaColisao;
let somDoPonto;
let somDaTrilha;

function preload () {
  imagemDaEstrada = loadImage ("Imagens/estrada.png");
  imagemDoAtor = loadImage ("Imagens/ator-1.png");
  imagemDoCarro1 = loadImage ("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage ("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage ("Imagens/carro-3.png");
  
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
  
  somDaColisao = loadSound ("Sons/colidiu.mp3")
  somDoPonto = loadSound ("Sons/pontos.wav")
  somDaTrilha = loadSound ("Sons/trilha.mp3")
  

}

