// Spred Operator

let lenguajes = ['JavaScript', 'PHP', 'Python'];
// let frameworks = ['ReactJS', 'Laravel', 'Django'];

// Unir estos arrays con concat

// let combinacion = lenguajes.concat(frameworks);
// console.log(combinacion);

// Unir con Spred Operator
// let combinacion = [...lenguajes, ...frameworks];
// console.log(combinacion);

// Spred con Reverse
let [ultimo] = [...lenguajes].reverse();
console.log(ultimo)
console.log(lenguajes)