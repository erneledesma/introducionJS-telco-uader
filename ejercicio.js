
let persona = {
    name: 'Nestor',
    age: 16
}

const MAYORIA_DE_EDAD = 18;

const  esMayorDeEdad = (persona) =>  {
    return persona.age >= MAYORIA_DE_EDAD;
}

const imprimirSiEsMayordeEdad = (persona) => {
    if( esMayorDeEdad(persona)) {
        console.log(`${persona.name} es mayor de edad`);
    } else {
        console.log(`${persona.name} no es mayor de edad`);
    }
}

imprimirSiEsMayordeEdad(persona)
