function array_average(array){
    if(array.length>0){
        acumulado = 0;
        for(i=0; i<array.length; i++){
            //console.log(array[i]);
            acumulado += array[i];
        }
    
        return acumulado/array.length;
    }else{
        return 0;
    }
}

console.log(array_average([1,2,2,4,100]));