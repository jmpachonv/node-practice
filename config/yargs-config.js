
const options = {
    base: {
        demand:false,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//Require sin un path significa que se importa desde el node_modules
const argv = require('yargs')
                    .command('listar', 'Imprime en consola la tabla de multiplicar de la base y el límite recibidos', options)
                    .command('crear', 'Crea un archivo con la tabla de multiplicar de la base y el límite recibidos', options)
                    .help()
                    .argv

module.exports = {
    argv
}                   