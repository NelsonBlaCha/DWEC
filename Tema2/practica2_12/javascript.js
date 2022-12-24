function esPrimo(numero) {
  if (numero == 1 || numero == 4) return false;
  for (divisor; divisor < numero / 2; divisor++) {
    if (numero % divisor == 0) return false;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return true;
}
/* INICIO */
divisor = 2;
numero = 0;
noJugar = true;
alerta = "";
while (noJugar) {
  numero = prompt(alerta + "Introduzca un numero entre 1 y 300");
  if (numero > 0 && numero <= 300) {
    if (esPrimo(numero)) {
      document.getElementById("mostarPantalla").innerHTML =
        "El numero " + numero + " SI es primo";
    } else {
      document.getElementById("mostarPantalla").innerHTML =
        "El numero " + numero + " NO es primo, se puede dividir por " + divisor;
    }
  } else {
    alerta = "Numero no valido. ";
    continue;
  }
  noJugar = confirm("¿Seguir jugando?");
}
