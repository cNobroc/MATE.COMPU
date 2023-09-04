// funcion random para los valores de los elementos de la matriz
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// funcion random para el size de la matriz 
function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
    
// pedimos la cantidad de filas y columnas  
var filas= prompt("ingrese el numero de filas")
var columnas= prompt("ingrese el numero de columnas ")

/*CREANDO MATRIZ*/
var Matriz= new Array();

 for(let i = 0; i < filas; i++ ){
    Matriz[i] = new Array();
    for(let j= 0; j< columnas; j++){
        Matriz[i][j] = prompt(`Ingrese el valor para Matriz[${i}][${j}]`);
        	    
    }
}
/* MOSTRAR MATRIZ */
for(let elemento in Matriz){
    console.log(Matriz[elemento])
}

