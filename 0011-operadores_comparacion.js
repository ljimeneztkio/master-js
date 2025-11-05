/**
 * Sirven para evaluar si dos valores cumplen con alguna condicion especificas indicadas
 * Igual a == 
 * Igual a === (Evalua tipo de dato y valor)
 * Distinto a != 
 * Distinto a !== (Evalua el tipo de dato y valor)
 * Mayor que >
 * Mayor o igual que >=
 * Menor que <
 * Menor o igual que <=
 */

let a = 10;
let b = '10';


console.log(a == b);
console.log(a === b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

console.log(`${a} == ${b} -->`, a == b);
console.log(`${a} == ${b} -->`, a === b);
console.log(`${a} == ${b} -->`, a != b);
console.log(`${a} == ${b} -->`, a !== b);