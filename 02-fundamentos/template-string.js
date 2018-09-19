let nombre = 'DeadPool';
let real = 'Wade Winston';

// console.log(nombre + '' + real);
// console.log('object');
// console.log(`${nombre} ${real}`);

function getNombre() {
    return `${nombre}${real}`;
}
console.log(`El nombre es: ${getNombre()}`);