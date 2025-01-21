document.addEventListener('DOMContentLoaded', ()=>{

    const db=[
        {nombre: 'Gerald Luciano'},
        {nombre: 'Gerald Ramirez'},
        {nombre: 'Miguel nerson'},
        {nombre: 'Ramon toledo'},
        {nombre: 'Juan Wargern'},
        {nombre: 'Jose maldonado'},
        {nombre: 'Julio Lora'},
        {nombre: 'Pedro Kaponi'},

    ]


    const dbFilter= db.filter(db=> db.nombre==='Gerald Luciano')
    const inputSearch= document.querySelector('#searchInput')
    const ulSearch= document.querySelector('#ulSearch')
    
    inputSearch.addEventListener('input', (e)=>{

        eliminarPrevio(ulSearch)
        db.forEach(db=>{
            const {nombre}= db
            if(Object.values(nombre).includes(e.target.value.charAt(0))){
                ulSearch.innerHTML+=`
                <li><button class="dropdown-item" type="button">${nombre}</button></li>
                `
            }
        })
    })

    function eliminarPrevio(elemento){
        while(elemento.firstChild){
            elemento.removeChild(elemento.firstChild)
        }
    }
})