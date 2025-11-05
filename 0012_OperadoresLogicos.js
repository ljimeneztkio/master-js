/**
 * Los operadores logicos nos ayudan a evaluar que se cumplan n cantidad de condiciones
 */

let a = true;
let b = true;

console.log(a);
console.log(b);

/**
 * Uso de AND
 * Por ley todo hombre mexicano mayor de edad debe de tramitar su cartilla de servicio militar
 * 
 */
let soyMexicano = true;
let soyHombre = true;
let soyMayorEdad = true;

let cartillaMilitarObligatoria = soyMexicano && soyHombre && soyMayorEdad;

console.log(`${soyHombre} && ${soyMexicano} && ${soyMayorEdad}`)
console.log(cartillaMilitarObligatoria);

/**
 * Uso de OR
 * 
 */

console.log(`${a} || ${b} == ${a || b}`);

/**
 *  Uso de NOT
 */

console.log(`a = ${a}`);
console.log(`!a = ${!a}`);

b = false;
console.log(`b = ${b}`);
console.log(`!b = ${!b}`);