function seleccion(menu) {
    switch (menu) {
      case "Menú 1":
        document.getElementById("mensaje").innerHTML = menu;
        break;
      case "Menú 2":
        document.getElementById("mensaje").innerHTML = menu;
        break;
      case "Menú 3":
        document.getElementById("mensaje").innerHTML = menu;
        break;
      default:
        if (parseInt(menu)) {
          document.getElementById("mensaje").innerHTML = "Menú " + menu;
        } else {
          document.getElementById("mensaje").innerHTML = "Error";
        }
        break;
    }
  }