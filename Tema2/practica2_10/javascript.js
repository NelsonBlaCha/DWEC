function comprobarFecha(fechaIntroducida) {
  fechaIntroducida = prompt("Introduzca la fecha de cumpleaños");
  validarFecha(fechaIntroducida);
  while (fechaCumple != fechaIntroducida) {
    fechaIntroducida = prompt(
      "La fecha no coincide. Introduzca la fecha de cumpleaños"
    );
    validarFecha(fechaIntroducida);
  }
}
function validarFecha(fecha) {
  const esFechaValida = Date.parse(fecha, "DD/MM/YYYY");
  if (isNaN(esFechaValida)) {
    document.getElementById("titulo").innerHTML =
      "El formato de la fecha no es valido. Debe ser DD/MM/YYYY";
  } else {
    document.getElementById("titulo").innerHTML =
      "El formato de la fecha es valido pero no coincide.";
  }
}
/* Inicio */
document.getElementById("titulo").innerHTML =
  "Bienvenido a... ADIVINA MI CUMPLEAÑOS";
const fechaCumple = prompt("Introduzca su fecha de cumpleaños");
alert("Su fecha de cumpleaños es: " + fechaCumple);
comprobarFecha();
document.getElementById("titulo").innerHTML =
  "La fecha es " + fechaCumple + " ¡Enhorabuena por acertar la fecha!";
