// REQUIRES
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');


let listarTabla = (base, limite = 10) => {
        console.log('=============='.green);
        console.log(`tabla de ${base}`.green);
        console.log('=============='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);

        }
    }
    // console.log(listarTabla(2, 2));

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`EL valor introducido ${base} no es un numero`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}=${base * [i]}\n`;

        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err)
            } else
                resolve(`tabla-${base}.txt`.green)

        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}