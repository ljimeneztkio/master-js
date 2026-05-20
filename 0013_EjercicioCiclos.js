let j = 1
while(j <=10){
    console.log(j);
    j += 3;
}
j = 1
while(j > -10){
    console.log(j);
    j -= 3;
}

//Solución Curso
let maximo = 10, minimo = -10;
console.log('Incrementos de 3 en 3');
for(let numero = 1; numero <= maximo; numero+=3){
    console.log(numero);
}

console.log('Decrementos de 3 en 3');
for(let numero = 1; numero>= minimo; numero -= 3){
    console.log(numero)
}