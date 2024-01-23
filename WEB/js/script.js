/*

VARIABLES Y CONSTANTES:

const: Constantes
let: Variables
var: Variables que no cuenta con scope
¿Qué es Scope? Es el alcance de un bloque de código {}

*/

/*
 
FUNCIONES:

function Suma(numero1, numero2) {
    return numero1 + numero2;
};

const resta = function (numero1, numero2) {
    return numero1 - numero2;
};
 
const division = (nummero1, numero 2) => {
    return numero1/numero2;
};

const division = (numero1, numero2) => numero1/numero2;

(() => {})();

*/

/*

OBJETOS: ARREGLOS Y LISTAS

- ARREGLOS:
const frutas = ['Platano', 'Sandía', 'Mango', true, 22, 50.5]; 
Index - 0, 1, 2, 3. 4, 5
lenght - 6

frutas.forEach((element, index) => {
    console.log("Fruta: " + index + " " + element);
    console.log(`Fruta: ${index} ${element}`); 
});

- LISTA:
const person = {
    name: '',
    address: '' {
        lattirud: '',
        longitude: '',
        strre: '',
        number: 0
    },
    lastname: '',
    birthday: '',
    socialNetwork: {
        facebook: '',
        x: ''
    }
}

console.log(person.socialNetwork.facebook)

- ARREGLOS DE LISTA:
const users = [person, person2];
users.forEach((element, index) => {
    console.log(`Usuario con indide ${index} tus datos son: `);
    console.log(`Nombre completo: ${element.name}`);
})

- DESESTRUCTURACIÓN
const users = [person, person2];
users.forEach(({name, lastname, address:{street}, socialNetwork: {facebook}}, index) => {
    console.log(`Usuario con indide ${index} tus datos son: `);
    console.log(`Nombre completo: ${element.name}`);
})

*/

/*
(() => {
    const teams = [];
    const chivas = {
        name: "Chivas",
        points: 10,
        league: "MX",
        match: [
            {
                team: 'Santos',
                points: 12,
                date: '2024-01-17'
            },
            {
                team: 'America',
                points: 23,
                date: '2024-01-23'
            }
        ],
        country: "México"
    };

    const { name, points, match } = chivas;

    match.forEach(({ team, points: teamPoints, date }, index) => {
        console.log("Partidos:", match.length);
        console.log(`${name} vs ${team} en el día 
                    ${new Date(date).getDate()} del mes 
                    ${new Date(date).getMonth()}
                    ${points > teamPoints ? `${name} tiene más puntos` : `${team} tiene más puntos`
            }`
        );
        console.log("poi", poi);
        console.log("poi", points);
        console.log(new Date(date));
    });
})();

*/

function get() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function getAll() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function post() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function put() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function del() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}