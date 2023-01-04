//Códigos dos Carros

//Posições dos Carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [45, 100, 150, 270, 315, 210]

//Velocidades dos Carros
let velocidadesCarros = [2.5, 3, 3.5,5, 3.5, 4]

//Comprimento e Altura Padrão Para os Carros
let comprimentoCarro = 60;
let alturaCarro = 35;

function mostraCarro () {
  for (let i = 0; i < imagemCarros.length; i += 1) {
  image (imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro () {
  for (let i = 0; i < imagemCarros.length; i +=1) { 
  xCarros[i] -= velocidadesCarros[i];
  }
}

function voltaPosicaoInicialDoCarro () {
  
  for(let i = 0; i < imagemCarros.length; i +=1) {
  
  if (passouTodaATela(xCarros[i])) {
    xCarros[i] = 600;
    }
  }
}
  function passouTodaATela (xCarro) {
    return xCarro < -60;
  }

