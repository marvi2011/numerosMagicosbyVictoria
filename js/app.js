const min = 1;
const max = 100;
let btnComenzar = document.querySelector("#btnComenzar");

function comenzarPartida() {
  numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(numeroAleatorio);

  btnComenzar.className = "btn btn-outline-info btn-lg";
  btnComenzar.innerHTML = "Ya estás jugando!!!";
  btnComenzar.disabled = true;
  let formJuego = document.querySelector("#formJuego");
  formJuego.reset();
}

function consultarNumero(e) {
  e.preventDefault();
  let numeroIngresado = document.querySelector("#numeroIngresado").value;
  let mensaje = document.querySelector("#msj");
  if (numeroIngresado == numeroAleatorio) {
    mensaje.className = "alert alert-primary  text-center container";
    mensaje.innerHTML = "Si!!! Acertaste 🙌";
    btnComenzar.className = "btn btn-success btn-lg";
    btnComenzar.innerHTML = "¿Jugamos otra vez?";
    btnComenzar.disabled = false;
  } else if (numeroIngresado > numeroAleatorio) {
    mensaje.className = "alert alert-info text-center container";
    mensaje.innerHTML =
      "El número mágico es menor al ingresado 🙁, ingresá otro número";
  } else {
    mensaje.className = "alert alert-info text-center container";
    mensaje.innerHTML =
      "El número mágico es mayor al ingresado 🙁, ingresá otro número";
  }
}
