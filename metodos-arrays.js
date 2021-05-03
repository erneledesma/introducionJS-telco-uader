
const personas = [
    { nombre: 'Martin', edad: 23, aprendiendo: 'JS' },
    { nombre: 'Pablo', edad: 33, aprendiendo: 'PHP' },
    { nombre: 'Alajandra', edad: 25, aprendiendo: 'Python' },
    { nombre: 'Rocio', edad: 21, aprendiendo: 'Angular' },
    { nombre: 'Marcos', edad: 35, aprendiendo: 'ReactJS' },
]

// console.log(personas);

// Utilizando .filter - Mayores de 26 años

const mayores = personas.filter( persona => {
    return persona.edad > 26
});

console.log(mayores);

