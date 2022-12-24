/* FUNCION NORMAL */
function nombreFuncion(parametro1, parametro2) {
  return parametro1 + parametro2;
}

/* ARROW FUNCTION */
(parametro1, parametro2) => {
  return parametro1 + parametro2;
};
arrorFunction = (parametro1, parametro2) => {
  return parametro1 + parametro2;
};

/* FUNCION AUTOINVOCADA */
(function nombreFuncion(parametro1, parametro2) {
  return parametro1 + parametro2;
})();
((parametro1, parametro2) => {
  return parametro1 + parametro2;
})();
(arrorFunction = (parametro1, parametro2) => {
  return parametro1 + parametro2;
})();

/* BUCLES */
for (i = 0, j = 0; (i = 10); i++) {
  console.log(i, j);
  ++j;
}
array = [1, 2, 3, 4];
for (clave in array) {
  console.log(clave);
}
for (value of array) {
  console.log(value);
}