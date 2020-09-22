const operacion = require('./multiplicar/operacion');
const colors = require('colors');
const { arvg } = require('./config/yargs');


let comando = arvg._[0];

switch (comando) {
    case 'listar':

        operacion.listar(arvg.base, arvg.limite)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            })
        break;

    case 'crear':
        operacion.multiplicar(arvg.base, arvg.limite)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no reconocido');
        break;
}