const fs = require('fs');
const colors = require('colors');

const multiplicar = async(base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let contenido = '';

        if (isNaN(base) || parseInt(base) <= 0 || base === '') {
            reject(`El valor ${base} no es valido.`)
            return;
        }

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tabla/tabla-${base}.txt`, contenido, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(`El archivo tabla-${base}.txt a sido creado`);
        });
    })
}

const listar = async(base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let contenido = '';
        if (isNaN(base) || parseInt(base) <= 0 || base === '') {
            reject(`El valor ${base} no es valido.`)
            return;
        }

        console.log('========================================'.yellow);
        console.log('========== Tabla de Multiplicar ========'.yellow);
        console.log('========================================'.yellow);
        for (let i = 1; i <= limite; i++) {
            contenido += `${colors.blue(base)} * ${i} = ${base * i}\n`;
        }
        resolve(contenido);

    });

}

module.exports = {
    multiplicar,
    listar
}