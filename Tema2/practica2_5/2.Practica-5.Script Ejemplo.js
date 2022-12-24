let corteMujer = 210;
var corteHombre = 220;
const corteNeno = 200;
console.log("FUERA antes funcion");
console.log(
  "var corteHombre: " +
    corteHombre +
    " // const corteNeno: " +
    corteNeno +
    " // let corteMujer: " +
    corteMujer
);
function cambioDeclaraciones() {
  var corteHombre = 22;
  const corteNeno = 20;
  console.log("DENTRO, creamos de nuevo las variables menos let corteMujer");
  console.log(
    "var corteHombre: " +
      corteHombre +
      " // const corteNeno: " +
      corteNeno +
      " // let corteMujer: " +
      corteMujer
  );
  corteMujer = 1021;
  corteHombre = 1022;
  console.log("DENTRO cambiando var corteHombre y let corteMujer");
  console.log(
    "var corteHombre: " +
      corteHombre +
      " // const corteNeno: " +
      corteNeno +
      " // let corteMujer: " +
      corteMujer
  );
}
cambioDeclaraciones();
console.log("FUERA despues funcion");
console.log(
  "var corteHombre: " +
    corteHombre +
    " // const corteNeno: " +
    corteNeno +
    " // let corteMujer: " +
    corteMujer
);
/* Siempre prioriza las variables locales sobre las globales */
