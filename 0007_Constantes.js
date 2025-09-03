/**
 * Uso de constantes en JavaScript
 * Las constantes son variables cuyo valor no puede cambiar una vez asignado.
 */

const SEGUNDOS_POR_MINUTO = 60;
const MINUTOS_POR_HORA = 60;
const HORAS_POR_DIA = 24;
const SEGUNDOS_POR_DIA = SEGUNDOS_POR_MINUTO * MINUTOS_POR_HORA * HORAS_POR_DIA;

//HORAS_POR_DIA = 25; // Esto generará un error porque las constantes no pueden ser reasignadas

console.log("Segundos por minuto:", SEGUNDOS_POR_MINUTO);
console.log("Minutos por hora:", MINUTOS_POR_HORA);
console.log("Horas por día:", HORAS_POR_DIA);   
console.log("Segundos por día:", SEGUNDOS_POR_DIA);   

console.log(Math.PI) // Constante predefinida en JavaScript