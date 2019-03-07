const opts={
    descripcion:{
        demand:true,
        alias:'d',
    },
    completado:{
        default:true,
        alias:'c',
        desc:'Marca como completado o pendiente la tarea'
    }

}

const argv = require('yargs')
.command('listar','Lista un estado completo de todo el objeto')
.command('crear','crea un elemento por hacer',opts)
.command('borrar', 'Borra un elemento',opts)
.command('actualizar','Actualiza el estado completo de una tarea',opts)
.help()
.argv


module.exports={
    argv
}