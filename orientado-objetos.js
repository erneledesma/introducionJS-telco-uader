// Escribir una clase

class Tarea {
    constructor(nombre, prioridad){
        this.nombre = nombre
        this.prioridad = prioridad
    }
    mostrar() {
       return(`${this.nombre} tiene una prioridad ${this.prioridad}`)
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad)
        this.cantidad = cantidad

    }
}

//crear Objetos para la Tarea
let tarea1 = new Tarea('Aprender JS', 'Alta')
let tarea2 = new Tarea('Aprender Angular', 'Alta')
let tarea3 = new Tarea('NodeJS', 'Media')
let tarea4 = new Tarea('Jest', 'Baja')

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

//Compras
let compra1 = new ComprasPendientes('jabon', 'Urgente', 3);
console.log(compra1.mostrar())