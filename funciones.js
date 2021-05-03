// Creando Funciones

// Funcion Declaration
// function saludar( nombre ) {
//     console.log(`Bienvenido ${nombre} `);
// }

// saludar('Ernesto Ledesma');

// //Funcion expression
// const cliente = function(nombreCliente) {
//     console.log(`Mostrando datos del cliente ${nombreCliente}`);
// }

// cliente('Ernesto Ledesma')

// Funciones con parametros
function actividad(nombre = 'Pedro', actividad = 'Enseñando BD') {
    console.log(`la persona ${nombre}, esta realizando la actividad ${actividad}`)
}

actividad('Ernesto', 'Aprendiendo JavaScript');
actividad('Lucia', 'Aprendiendo React')
actividad()