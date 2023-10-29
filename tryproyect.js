// funcion random para los valores de los elementos de la matriz
/*
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
var filas = prompt("ingrese el numero de filas")
var columnas = prompt("ingrese el numero de columnas ")
*/

/*CREANDO MATRIZ
var Matriz = new Array();

for (let i = 0; i < filas; i++) {
    Matriz[i] = new Array();
    for (let j = 0; j < columnas; j++) {
        Matriz[i][j] = prompt(`Ingrese el valor para Matriz[${i}][${j}]`);

    }
}
// MOSTRAR MATRIZ 
for (let elemento in Matriz) {
    console.log(Matriz[elemento])
}
*/
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

botonAleatorio.addEventListener("click", function () {
    if (Matriz === null) {
        let n = getRandomInt2(5, 15);
        Matriz = generarMatrizAleatoria(n);
        console.log("Matriz Original:");
        var matrizOriginal = JSON.parse(JSON.stringify(Matriz));
        console.log(matrizOriginal);
        AgregacionDiagonal();
        console.log("Matriz con Diagonal Modificada:");
        var matrizcondiagonal = JSON.parse(JSON.stringify(Matriz))
        console.log(matrizcondiagonal);
        encontrarMatrizCaminos(Matriz);
        console.log("Matriz con caminos:")
        var matrizdecaminos = JSON.parse(JSON.stringify(Matriz))
        console.log(matrizdecaminos)
        console.log("Matriz ordenada:");
        reordenando();
        console.log(Matriz);
    }
});

botonPersonalizado.addEventListener("click", function () {
    if (Matriz === null) {
        let n;
        do 
            {
               n= prompt("Ingrese el número de tamaño de la matriz");
               n = parseInt(n);
            }
            while(isNaN(n) || n < 5 || n > 15);
        Matriz = generarMatrizPersonalizada(n);
        console.log("Matriz Original:");
        var matrizOriginal = JSON.parse(JSON.stringify(Matriz));
        console.log(matrizOriginal);
        AgregacionDiagonal();
        console.log("Matriz con Diagonal Modificada:");
        var matrizcondiagonal = JSON.parse(JSON.stringify(Matriz))
        console.log(matrizcondiagonal);
        encontrarMatrizCaminos(Matriz);
        console.log("Matriz con caminos:")
        var matrizdecaminos = JSON.parse(JSON.stringify(Matriz))
        console.log(matrizdecaminos)
        console.log("Matriz ordenada:");
        reordenando();
        console.log(Matriz);
    }
});

botonReset.addEventListener("click", function () {
    Matriz = null;  // Reiniciar la matriz a nula
    console.clear();
    console.log("Matriz reiniciada");
});

function generarMatrizAleatoria(n) {
    var Matriz = new Array();
    for (let i = 0; i < n; i++) {
        Matriz[i] = new Array();
        for (let j = 0; j < n; j++) {
            Matriz[i][j] = getRandomInt(2);
        }
    }
    return Matriz;
}

function generarMatrizPersonalizada(n) {
    var Matriz = new Array();
    for (let i = 0; i < n; i++) {
        Matriz[i] = new Array();
        for (let j = 0; j < n; j++) {
            let valor;
            do {
                valor = prompt(`Ingrese el valor para la posición [${i}][${j}]`);
            } while (valor !== '1' && valor !== '0');
            Matriz[i][j] = parseInt(valor);
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
    for (let i = 0; i < n; i++) {
        let j = (i !== 0) ? 0 : 1; // Asegura que no revisamos la diagonal principal en la primera fila
        while (j < n) {
            if (matriz[i][j] === 1 && i !== j) {
                let cambio = false; // Verificar si la fila i cambió durante la fusión
                for (let k = 0; k < n; k++) {
                    const prev_val = matriz[i][k];
                    matriz[i][k] = Math.max(matriz[i][k], matriz[j][k]);
                    if (matriz[i][k] !== prev_val && k === j) {
                        cambio = true;
                    }
                }
                j = cambio ? 0 : j + 1;
            } else {
                j++;
            }
        }
    }
}

function reordenando() {
    const n = Matriz.length;

    const sumasFilas = Matriz.map(fila => fila.reduce((a, b) => a + b, 0));

    const indicesYSumas = sumasFilas.map((suma, indice) => [indice, suma]);
    indicesYSumas.sort((a, b) => b[1] - a[1]);

    const indicesOrdenados = indicesYSumas.map(([indice, suma]) => indice);

    const matrizOrdenada = indicesOrdenados.map(indice => Matriz[indice].slice());

    const matrizFinal = [];
    for (let i = 0; i < n; i++) {
        const nuevaFila = indicesOrdenados.map(idx => matrizOrdenada[i][idx]);
        matrizFinal.push(nuevaFila);
    }

    Matriz = matrizFinal;
}

















