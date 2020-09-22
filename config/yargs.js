const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    },
}

const arvg = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear un archivo de texto de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    arvg
}