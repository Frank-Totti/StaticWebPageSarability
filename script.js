const imagenes = ["imagen1.jpg", "imagen2.jpg"];
let indice = 0;

function alternarImagen() {
  indice = 1 - indice;
  document.getElementById("imagen").src = imagenes[indice];
}
