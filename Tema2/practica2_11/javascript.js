function comprobarFecha(fechaCumple) {
  fechaIntroducida = prompt("Introduzca la fecha de cumpleaños");
  if (fechaCumple != fechaIntroducida) {
    throw (
      'Has introducido la fecha "' +
      fechaIntroducida +
      '" y la fecha correcta era "' +
      fechaCumple +
      '" ¡Has fallado!'
    );
  }
}
/* Inicio */
try {
  document.getElementById("titulo").innerHTML =
    "Bienvenido a... ADIVINA MI CUMPLEAÑOS";
  const fechaCumple = prompt("Introduzca su fecha de cumpleaños");
  alert("Su fecha de cumpleaños es: " + fechaCumple);
  comprobarFecha(fechaCumple);
  document.getElementById("titulo").innerHTML =
    'La fecha es "' + fechaCumple + '" ¡Enhorabuena por acertar la fecha!';
} catch (error) {
  document.getElementById("titulo").innerHTML = error;
}
