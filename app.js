const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

//console.log(comando);

switch(comando){
    case 'crear':
        let tarea=porHacer.crear(argv.descripcion);
        //porHacer.guardar(tarea);
        console.log(tarea);
    break;

    case 'listar':
        let listado=[];
        listado = porHacer.getListado();
        console.log('listado',listado);
        listado.forEach(element => {
            console.log('=================='.green)
            console.log(element.descripcion);
            console.log('Estado: ',element.completado);
            console.log('==================='.green)
        });
        
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'guardar':
        console.log('Se guardo con exito');

    case 'borrar':
     let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
    default:
        console.log('Comando no reconocido')
}