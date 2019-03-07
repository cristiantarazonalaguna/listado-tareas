const fs = require('fs');

let listadoPorHacer = [];

const guardar =()=>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{ 
           if(err) throw new Error('No se pudo grabar', err);
    })
}
const cargarDB = ()=>{
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(error){
        listadoPorHacer = [];
    }
    

    console.log(listadoPorHacer);
}

const crear = (descripcion)=>{

    let porHacer={
        descripcion,
        completado:true,
    };
    listadoPorHacer.push(porHacer);
    guardar();

    return porHacer;


}

const getListado= ()=>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion,completado=true)=>{
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    })

    if(index >= 0){
        listadoPorHacer[index].completado = completado;

        guardar();
        return true;

    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        listadoPorHacer.splice(index,1);
        guardar();
        return true;
    }else{
        return false;
    }
}


module.exports={
    crear,
    guardar,
    getListado,
    actualizar,
    borrar,
}