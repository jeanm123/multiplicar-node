console.log('Inicio del programa');

setTimeout(function() {
    console.log('primer Timeout');
}, 3000);

setTimeout(function() {
    console.log('Segundo Timeout');
}, 0);

setTimeout(function() {
    console.log('tercer Timeout');
}, 0);
console.log('fin del programa');