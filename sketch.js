console.log("Vamos para cima!!!")

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop (0,1,0.3);
}

function draw() {
  background(imagemDaEstrada);

  //Funções do ator
  mostraAtor ();
  movimentoDoAtor();
  incluiPontos();
  marcaPontos();
  
  //Funções dos Carros
  mostraCarro ();
  movimentaCarro ();
  voltaPosicaoInicialDoCarro ();
  verificaColisao();

}