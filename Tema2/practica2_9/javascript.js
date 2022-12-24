function seleccion(menu) {
  if (parseInt(menu)) {
    document.getElementById("mensaje").innerHTML = "Menú " + menu;
  } else {
    document.getElementById("mensaje").innerHTML = "Error";
  }
}

mensaje = prompt("Introduzca valor");
seleccion(parseInt(mensaje));
