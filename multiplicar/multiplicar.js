const fs = require('fs');
const colors = require('colors');

//La asignación al límite es un valor por default si no recibe valor
let listarArchivo = (base, limite = 10) => {

    console.log(`==================`.red);
    console.log(`***Tabla del ${base}***`.green);
    console.log(`==================`.red);
    
    for(let i=1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}`);
    }

};

//La asignación al límite es un valor por default si no recibe valor
let crearArchivo = (base, limite = 10) => {

    return new Promise( (resolve,reject) => {

        if(!Number(base)){
            reject(`${base} no es un número!`)
            return;
        }

        if(!Number(limite)){
            reject(`${limite} no es un número!`)
            return;
        }

        let data = '';

        console.log(`Tabla del ${base} hasta ${limite}:`);

        for(let i = 1; i<=limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-lim-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }else{
                resolve(`tabla-${base}-lim-${limite}.txt`);
            }
            // console.log(`El archivo tabla-${base}.txt ha sido creado bajo el límite ${limite}`);

        });
    });
};

module.exports = {
    crearArchivo,
    listarArchivo
}

// module.exports = {
//     crearArchivo: crearArchivo
// }

