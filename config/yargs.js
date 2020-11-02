const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de nultiplicar', opts)
    .command('crear', 'Genera un docuemnto de texto con la tabla definida como base hasta un limite proporcionado', opts)
    .help()
    .argv;

    module.exports = {
        argv
    }