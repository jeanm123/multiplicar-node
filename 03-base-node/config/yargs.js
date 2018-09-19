// LISTAR ARGV
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('Crear', 'crea un archivo de texto', opts)
    .help()
    .argv;

module.exports = {
    argv
}