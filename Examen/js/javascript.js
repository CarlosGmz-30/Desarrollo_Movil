// EJERCICIO 1:

// Utilizando const:
const pi = 3.1416;
// pi = 3.14;
// Esto dará un error, porque no se puede reasignar una constante

// Utilizando let:
let contador = 0;
contador = contador + 1;
// Se puede reasignar el valor de una variable declarada con let


// Utilizando var:
var mensaje = "Hola";
if (true) {
    var mensaje = "Prueba uso de var";
}
console.log(mensaje);
// Las variables var tienen alcance de función o global, no de bloque


// EJERCICIO 2:

const nombreUsuario = "Carlos";
const edadUsuario = 20;

const mensajeBienvenida = (nombre, edad) => {
    return `¡Bienvenido ${nombre}, tienes ${edad} años!`;
};

const mensajePrueba = mensajeBienvenida(nombreUsuario, edadUsuario);
console.log(mensajePrueba);

// EJERCICIO 3:

// Uso de Then
fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log('Datos obtenidos:', data);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });


// Uso de async await
const obtenerDatos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log('Datos obtenidos:', data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

obtenerDatos();