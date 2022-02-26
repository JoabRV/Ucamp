/* SECUENCIAL */

// Inicializamos la constante `a` con el valor numérico `1`

const a = 1;

// Inicializamos la constante `b` con el valor numérico `2`

const b = 2;

// Realiza acción de sumar, `suma` es igual al valor numérico `3`

const suma = a + b;

// Imprime el valor `3` de la constante `suma` en la consola.

console.log(suma);

// Ejecución de un conjunto de sentencias sólo si se cumple una condición específica.

/* CONDICIONAL */

const c = 1;

const d = 2;

const sumaCondicional = c + d;

// Imprime el valor `3` de la constante `sumaCiclica` en la consola // sólo si éste es mayor o igual a 3.

if (sumaCondicional >= 3) {

console.log(sumaCondicional);

}
/* CÍCLICA */

const e = 1;

const f = 2;

const sumaCiclica = e + f;

// Imprime el valor del contador `i` en cada ciclo `0 1 2 3` en la consola

// hasta que el contador `i` sea mayor al valor de `suma`.

// En cada vuelta del ciclo, el contador `i` se incrementa en `1`

for (let i = 0; i <= sumaCiclica; i += 1) {

console.log(i);

}
// Esta función cumple con la inmutabilidad

// No cambia el valor del parámetro `a` que está recibiendo

// Genera un nuevo valor `b` basado en `a`

const funcionPuraEInmutable = (a) => {

    let b = a;
    
    b += 1;
    
    return b;
    
    };
    
    // Así mismo es pura, siempre que reciba 2 como parámetro
    
    console.log(funcionPuraEInmutable(2)); // Imprime `3` // El prototipo de un arreglo en javascript
    
    // tiene métodos de que hacen uso de funciones de orden superior
    
    // y de la composición, `map` es uno de ellos
    
    const arreglo = [1, 2, 3];
    
    // Usamos el `map` del arreglo para invocar la función pura e inmutable
    
    // al hacer esto, por cada elemento del arreglo, se invoca la función
    
    // y la función recibe el elemento como parámetro
    
    const mapaArreglo = arreglo.map(funcionPuraEInmutable);
    
    // Lo que genera un nuevo arreglo con los elementos incrementados en `1`
    
    console.log(mapaArreglo); // Imprime `[2, 3, 4]`
    
    // Si se quiere reusar la función pura e inmutable, podemos hacerlo encadenando
    
    // lo que permite el re-uso del código y la fácil lectura de este
    
    const nuevoArreglo = [4, 5, 6];
    
    // El primer `map` regresa un arreglo, con lo que componiendo y encadenando
    
    // ese primer resultado se pasa al segundo `map` como parámetro
    
    const resultadoEncadenado = nuevoArreglo
    
    .map(funcionPuraEInmutable)
    
    .map(funcionPuraEInmutable);
    
    // El resultado será otro arreglo con los elementos incrementados en 2
    
    console.log(resultadoEncadenado); // Imprime `[6, 7, 8]