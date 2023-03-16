const IMPUT_VALUE = document.getElementById("input-value");
const LARGO = document.getElementById("largo");
const VOLUMEN = document.getElementById("volumen");
const PESO = document.getElementById("peso");
const BOTON_CONVERTIR = document.getElementById("btn-convertir");

const feetAMetro = 3.281;
const litrosAGalones = 0.264;
const kiloToLibra = 2.204;

// let parrafo = "hola que tal"

// LARGO.innerText = parrafo;
// VOLUMEN.innerText = parrafo;
// PESO.innerText = parrafo;

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

BOTON_CONVERTIR.addEventListener("click", function () {
  let valor = IMPUT_VALUE.value;

 
    LARGO.innerText = `${valor} metros = ${(valor * feetAMetro).toFixed(
      3
    )} pies | ${valor} pies = ${(valor / feetAMetro).toFixed(3)} metros`;
    VOLUMEN.innerText = `${valor} litros = ${(valor * litrosAGalones).toFixed(
      3
    )} galones | ${valor} galones = ${(valor / litrosAGalones).toFixed(
      3
    )} litros`;
    PESO.innerText = `${valor} kilos = ${(valor * kiloToLibra).toFixed(
      3
    )} libras | ${valor} libras = ${(valor / kiloToLibra).toFixed(3)} kilos`;
});
