'use strict'

/**
 * Hoisting es una característica de JavaScript que permite que las declaraciones de 
 * variables y funciones sean "elevadas" al inicio de su contexto de ejecución antes 
 * de que el código sea ejecutado.
 * Esto significa que puedes usar variables y funciones antes de declararlas en el código.
 * 
 * !Solo aplica con var y eso si no está habilitado el modo estricto (use strict)
 */

x = 10;
y = 20; // Salida Cannot access 'y' before initialization
console.log(x); // 10
console.log(y); // 20

var x; // Declaración de la variable x después de su usos
let y; // Declaración de la variable y después de su usos