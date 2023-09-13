function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var botonAleatorio = document.getElementById("boton_aleatorio");
var Matriz = new Array();

botonAleatorio.addEventListener("click", function() {
   

    var filas = getRandomInt2(5, 15);
    var columnas = getRandomInt2(5, 15);

    for (let i = 0; i < filas; i++) {
        Matriz[i] = new Array();
        for (let j = 0; j < columnas; j++) {
            Matriz[i][j] = getRandomInt(2);
        }
    }

    console.log(Matriz); // Imprime la matriz completa en la consola
});

var botonPersonalizado= document.getElementById("boton_personalizado");

botonPersonalizado.addEventListener("click", function(){
    var filas = prompt("ingrese el numero de filas")
    var columnas = prompt("ingrese el numero de columnas ")
    for(let i= 0; i< filas; i++){
        Matriz[i]= new Array();
        for(let j= 0; j< columnas;j++){
            Matriz[i][j]= prompt(`Ingrese el valor para la posición [${i}][${j}]`)
        }
    }
    
    console.log(Matriz);

})
