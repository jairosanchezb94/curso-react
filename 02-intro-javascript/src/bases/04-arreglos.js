// Arrelos en JS

//const arreglo = new Array( 100 );

const arreglo = [1,2,3,4,5,6,7,8,9,10];
//arreglo.push(25)

let arreglo2 = [...arreglo, 5];
//arreglo2.push(25);


const arreglo3 = arreglo2.map(function(numero){
    return numero * 5;
});    


console.table(arreglo); 
console.table(arreglo2);
console.table(arreglo3);