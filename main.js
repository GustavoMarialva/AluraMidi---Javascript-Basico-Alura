// function tocaSomPom() {
//   document.querySelector("#som_tecla_pom").play();
// }

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  // template string ${instrumento}
  const idAudio = `#som_${instrumento}`;
  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  contador += 1;
}
// function tocaSomClap() {
//   document.querySelector("#som_tecla_clap").play();
// }

// document.querySelector(".tecla_pom").onclick = tocaSomPom; //tocaSomPom esta sem () para que a função possa ser guardada no onclick
