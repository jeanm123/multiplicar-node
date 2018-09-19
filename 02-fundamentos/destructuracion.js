let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} -Poder: ${this.poder}`;
    }
};
// console.log(deadpool.getNombre());

//FORMA SIMPLE 
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

//DESTRUCTURACION
// nombre: primerNombre-----esto hace referencia a el cambio de nombre a primerNombre

let { nombre: primerNombre, apellido: primerApellido, poder: primerPoder } = deadpool;

console.log(primerNombre, primerApellido, primerPoder);