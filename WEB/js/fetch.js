/*

Retorna una promesa (Una promesa tiene 3 status):
- Pendiente
- Cumpplida
- Rechazada


*/

// Promesas
let miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const status = true;
        if (status) {
            resolve('Operación extiosa')
        } else {
            reject('Rechazada')
        }
    }, 3000);
});

miPromesa.then(element => {
    console.log('Resultado', element);
}).catch(error => {
    console.error('error', error);
});

// async - await
(async () => {
    try {
        const response = await miPromesa;
        console.log('Respuesta:', response)
    } catch (error) {
        console.error('Error en el try catch: ', error);
    }
})();

// fetch
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    response.json().then(element => {
        console.table('element', element);
    });
});

const objectSinJson = {name: 'Carlos', lastname: 'Martínez'};
JSON.stringify(objectSinJson)
