let mostrandoPrimera = true;

function alternarImagen() {
  const img = document.getElementById("imagen");
  mostrandoPrimera = !mostrandoPrimera;
  img.src = mostrandoPrimera ? "imagen1.jpg" : "imagen2.jpg";
}
