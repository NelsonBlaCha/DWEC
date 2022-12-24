console.log("---------PRUEBAS DE CONVERSION---------");
console.log("3" + 2);
console.log("3" * 2);
console.log("hello" + 2);
console.log("hello" * 2);
console.log(null * 2); /* Es un 0 como numero, no como false */
console.log(true * 2);
console.log(false * 2);
console.log(undefined * 2);
console.log("---------PRUEBAS DE CONVERSION FORZADA---------");
console.log(Number("3") + Number("2"));
console.log(String(3) + String(4));
console.log(parseInt(1000, 2));
console.log(parseInt("100 cañones por banda", 10));
console.log(parseInt("100 cañones por banda"));
console.log(parseFloat("100.323 cañones por banda", 10));
console.log(parseFloat("100,323 cañones por banda", 10));
console.log(parseFloat("100, 323 cañones por banda", 10));
console.log(isNaN("hello" * 3));
console.log(isNaN(NaN));
console.log(isNaN("6" * 3));

console.log(isNaN(Infinity));
console.log(isNaN(3 / 0));
