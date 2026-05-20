/**
 * Realizar la suma de los primeros 5 numero utilizando un ciclo for
 */

let acumulado = 0, maximo=5;
for(let numero=1; numero<=maximo; numero++){
    console.log(`${acumulado} + ${numero} =  ${acumulado + numero}`)
    acumulado += numero;
    console.log(acumulado);
}

console.log(acumulado);