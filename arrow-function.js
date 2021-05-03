// Funciones Flechas

const viajando = (destino, duracion ) => {
    return `Viajando a la ciudad de ${destino} por ${duracion}`
}

let viaje;
viaje = viajando('Paris');
viaje = viajando('Suiza');
viaje = viajando('Bogota', '10 dias');

console.log(viaje);

