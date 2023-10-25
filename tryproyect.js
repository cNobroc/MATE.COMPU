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
        console.log(Matriz)
        
     
    }
});

botonPersonalizado.addEventListener("click", function() {
    if (Matriz === null) {
        let n = prompt("Ingrese el número de tamaño de la matriz");
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
        console.log(Matriz)
        
    }
});

botonReset.addEventListener("click", function() {
    Matriz = null;  
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
// asdasd
function generarMatrizPersonalizada(n) {
    var Matriz = new Array();
    for (let i = 0; i < n; i++) {
        Matriz[i] = new Array();
        for (let j = 0; j < n; j++) {
            let valor;
            do 
            {
               valor = prompt(`Ingrese el valor para la posición [${i}][${j}]`)
            }
            while(valor !== '1' && valor !== '0');
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
                    Matriz[i][j] = 1; 
                }
            }
        }
    } else {
        console.log("No hay una matriz registrada.");
    }
}

function encontrarMatrizCaminos(matriz) {
    const n = matriz.length; 
    for (let i = 0; i < n; i++) {
        let j = (i !== 0) ? 0 : 1; 
        while (j < n) {
            if (matriz[i][j] === 1 && i !== j) {
                let cambio = false;
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
    return matriz;

    function ordenandomatriz(matriz){
        function reordenarMatriz(matriz) {
            const n = matriz.length;
            

            const sumasFilas = matriz.map(fila => fila.reduce((a, b) => a + b, 0));
            
            
            const indicesYSumas = sumasFilas.map((suma, indice) => [indice, suma]);
            indicesYSumas.sort((a, b) => b[1] - a[1]);
            
            
            const indicesOrdenados = indicesYSumas.map(item => item[0]);
            
           
            const matrizOrdenada = indicesOrdenados.map(idx => matriz[idx]);
            
            
            const matrizFinal = matrizOrdenada.map(fila =>
                indicesOrdenados.map(idx => fila[idx])
            );
        
            
            process.stdout.write(" ");
            indicesOrdenados.forEach(idx => process.stdout.write(idx + " "));
            console.log();
        
            matrizFinal.forEach((fila, i) => {
                process.stdout.write(i + " ");
                fila.forEach(elem => process.stdout.write(elem + " "));
                console.log();
            });
        }
        
       
    }

    return matrizCaminos;
}


















    return matrizCaminos;
}
