const url='https://uptask-admin.onrender.com/tareas'

export const guardartarea= async tarea=>{
    try {
        await fetch(url,{
          method: 'POST',
          body: JSON.stringify(tarea),
          headers: {
            'Content-Type': 'application/json'
          }

        })
        
    } catch (error) {
        console.log(error)
        
    }

}

export const obtenertareas= async ()=>{
    try {
        const resultado= await fetch(url)
        const respuesta= resultado.json()
        return respuesta
        
    } catch (error) {
        
    }
}

export const eliminarTarea= async id=>{
    try {
        
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
        
    }
}



