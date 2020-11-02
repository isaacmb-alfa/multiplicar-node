const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        console.log('=================='.green);
        console.log(`==tabla de ${base}==`.red);
        console.log('=================='.green);

        if (!Number(base)) {
            reject(`El valor "${base}" no es un número`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;

        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)

            else
                resolve(`tala-${base}-al-${limite}.txt`)

        });
    })
}
let listarTabla = (base, limite= 10) => {

    return new Promise((resolve, reject) => {

        console.log('=================='.green);
        console.log(`==tabla de ${base}==`.red);
        console.log('=================='.green);

        if (!Number(limite)) {

            reject(`El valor "${limite}" no es un número`);

            return;
        }
        if (!Number(base)) {
            reject(`El valor "${base}" de la base no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);

        }

    })
}

module.exports = {
    crearArchivo,
    listarTabla,
}