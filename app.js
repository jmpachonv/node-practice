//Requireds
//const fs = require('fs');
//const express = require('express'); //Paquetes no nativos de node
//const  = require('./fs'); //Paquetes creados por nosotros en el proyecto

//Se puede hacer la importación del archivo sin necesidad de colocar la extensión .js ya que es 'redundante'
//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs-config').argv;

const colors = require('colors');

//Captura manual de parámetros de ejecución
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//Hemos capturado el segundo parámetro del arreglo de parámetros recibidos

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;

switch(comando){
    
    case 'listar':
        listarArchivo(base, limite);
    break;
    
    case 'crear':
        crearArchivo(base, limite)
        .then( (archivo) => {

            console.log('Archivo creado: ' + `${archivo}`.green.underline.green);
        })
        .catch( (err) => {console.log(err)});
    break;
    
    default:
        console.log(`Comando ${comando} no reconocido`);
    break;
}




