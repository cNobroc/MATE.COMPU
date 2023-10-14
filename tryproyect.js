var Matriz = null;  // Inicialmente, la matriz es nula

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var botonAleatorio = document.getElementById("boton_aleatorio");
var botonPersonalizado = document.getElementById("boton_personalizado");
var botonReset = document.getElementById("boton_reset");

botonAleatorio.addEventListener("click", function() {
    if (Matriz === null) {
        var filas = getRandomInt2(5, 15);
        var columnas = getRandomInt2(5, 15);
        Matriz = generarMatrizAleatoria(filas, columnas);
        console.log("Matriz Original:");
        var matrizOriginal = JSON.parse(JSON.stringify(Matriz));
        console.log(matrizOriginal); 
        AgregacionDiagonal(); 
        console.log("Matriz con Diagonal Modificada:");
        var matrizcondiagonal = JSON.parse(JSON.stringify(Matriz))
        console.log(matrizcondiagonal); 
        encontrarMatrizCaminos(Matriz);
        console.log("Matriz con caminos:")
        console.log(Matriz)
        
     
    }
});

botonPersonalizado.addEventListener("click", function() {
    if (Matriz === null) {
        var filas = prompt("Ingrese el número de filas");
        var columnas = prompt("Ingrese el número de columnas");
        Matriz = generarMatrizPersonalizada(filas, columnas);
        console.log("Matriz Original:");
        var matrizOriginal = JSON.parse(JSON.stringify(Matriz));
        console.log(matrizOriginal); 
        AgregacionDiagonal(); 
        console.log("Matriz con Diagonal Modificada:");
        var matrizcondiagonal = JSON.parse(JSON.stringify(Matriz))
        console.log(matrizcondiagonal); 
        encontrarMatrizCaminos(Matriz);
        console.log("Matriz con caminos:")
        console.log(Matriz)
        
    }
});

botonReset.addEventListener("click", function() {
    Matriz = null;  // Reiniciar la matriz a nula
    console.log("Matriz reiniciada");
});

function generarMatrizAleatoria(filas, columnas) {
    var Matriz = new Array();
    for (let i = 0; i < filas; i++) {
        Matriz[i] = new Array();
        for (let j = 0; j < columnas; j++) {
            Matriz[i][j] = getRandomInt(2);
        }
    }
    return Matriz;
}

function generarMatrizPersonalizada(filas, columnas) {
    var Matriz = new Array();
    for (let i = 0; i < filas; i++) {
        Matriz[i] = new Array();
        for (let j = 0; j < columnas; j++) {
            Matriz[i][j] = prompt(`Ingrese el valor para la posición [${i}][${j}]`);
        }
    }
    return Matriz;
}

function AgregacionDiagonal() {
    if (Matriz !== null) {
        const filas = Matriz.length;
        const columnas = Matriz[0].length;

        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (i === j) {
                    Matriz[i][j] = 1; // Establece la diagonal principal a 1
                }
            }
        }
    } else {
        console.log("No hay una matriz registrada.");
    }
}

function encontrarMatrizCaminos(matriz) {
    const n = matriz.length; // Número de nodos en el grafo

    // Inicializa la matriz de caminos con la misma estructura que la matriz original.
    const matrizCaminos = new Array(n);
    for (let i = 0; i < n; i++) {
        matrizCaminos[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            matrizCaminos[i][j] = matriz[i][j];
        }
    }

    // Aplica el algoritmo de Warshall para encontrar los caminos mínimos.
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrizCaminos[i][j] = matrizCaminos[i][j] || (matrizCaminos[i][k] && matrizCaminos[k][j]);
            }
        }
    }

    return matrizCaminos;
}
