const dia= document.querySelector('#dia');
// const tituloFechaAct= document.querySelector('#fechaActual');
// const formulario= document.querySelector('#formulario')
// const tituloActual= document.querySelector('#tituloActual');
// const imgClima= document.querySelector('#imgClima');
// const climaActual= document.querySelector('#climaActual');
// const contenedorClima= document.querySelector('#contenedorClima');
// const resultadoClima= document.querySelector('.resultadoClima');
// const btnMicrofono= document.querySelector('.mic-btn');
// let recognition;
// let synth = window.speechSynthesis;
// // const body=document.querySelector('body')

// btnMicrofono.addEventListener('click',ejecutarSpeech)

// moment.locale('es');  
// const fechaActual= moment().format('LL');
// tituloFechaAct.textContent= fechaActual;
const diaActual= moment().format('dddd');
dia.textContent=`${diaActual}`;

console.log(dia)

function actualizarHora(){
    const hora= document.querySelector('#hora');
    const horaActual= moment().format('h:mm:ss a');
    hora.innerHTML=`Hora actual: ${horaActual}`;
}

// function validarFormulario(e){
//     e.preventDefault();
//     const ciudad = document.querySelector('#ciudad').value;
//     const pais = document.querySelector('#pais').value;

//     if(ciudad === '' || pais === '') {
//         console.log('Ambos campos deben llenarse');
//         return;
//     }
//     consultarAPI(ciudad, pais);
// }

// function ejecutarSpeech(){
//     const SpeechRecognition= webkitSpeechRecognition
//     recognition= new SpeechRecognition()
//     recognition.lang= 'es-ES'
//     recognition.interimResults = false; // Resultados finales

//     recognition.start()
//     recognition.onstart = ()=>{
//         console.log('Escuchando...');
        
       
//     };

//     recognition.onspeechend = ()=> {
//         console.log('Se dejó de grabar...');
//         recognition.stop(); // Detener el reconocimiento para reiniciar automáticamente
//     };
//     recognition.onresult = e=> {
//         const speechResult = e.results[0][0].transcript; // Capturar el texto reconocido
//         console.log(speechResult);
//         console.log(e.results)
//         consultarAPI(speechResult); 
//     };
//     recognition.onend= ()=>{
//         // ejecutarSpeech()
//     }
// }

// async function consultarAPI(ciudad) {
//     const appId = '5030579228c9c8029a2d303ab488c58d';
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},&appid=${appId}`  
    
//     try {
//         Spinner();
//         const respuesta = await fetch(url);
//         const datos = await respuesta.json();
//         limpiarSpinner();  // Eliminar spinner antes de mostrar los datos
//         mostrarClima(datos);
//         speak(`El clima de ${ciudad} es ${climaActual.textContent}`);
        
//     } catch (error) {
//         limpiarSpinner();  // Eliminar spinner también si hay error
//         console.log("Error al obtener datos:", error);
        
//     }

//     // fetch(url)
//     // .then(respuesta => respuesta.json())
//     // .then(datos => {
//     //     limpiarSpinner();  // Eliminar spinner antes de mostrar los datos
//     //     mostrarClima(datos);
//     //     speak(`El clima de ${ciudad} es ${climaActual.textContent}`);
//     // })
//     // .catch(error => {
//     //     limpiarSpinner();  // Eliminar spinner también si hay error
//     //     console.log("Error al obtener datos:", error);
//     // });
// }

// function mostrarClima(datos){
//     const { name, main: { temp, temp_max, temp_min, humidity}, wind: { speed }} = datos;
//     console.log(datos);

//     const temperatura = document.querySelector('#temperaturaTotal');
//     const grados = KelvinACentigrados(temp);
//     temperatura.innerHTML = `${grados}°C`;

//     const humedad = document.querySelector('#humedad');
//     humedad.innerHTML = `${humidity}% DE HUMEDAD`;

//     const temperaturaMax = document.querySelector('#gradosMax');
//     const gradosMax = KelvinACentigrados(temp_max);
//     temperaturaMax.innerHTML = `${gradosMax}°C`;

//     const temperaturaMin = document.querySelector('#gradosMin');
//     const gradosMin = KelvinACentigrados(temp_min);
//     temperaturaMin.innerHTML = `${gradosMin}°C`;

//     const velocidad = document.querySelector('#velocidadViento');
//     const velocidadViento = (speed * 3.6).toFixed(2);
//     velocidad.innerHTML = `${velocidadViento} km/h`;

//     // Mostrar imagen del clima según la descripción
//     if (datos.weather[0].description === 'overcast clouds'
//          || datos.weather[0].description === 'light intensity shower rain') {
//         tituloActual.innerHTML = 'CIELO CUBIERTO';
//         imgClima.src = 'imagenes/nubes-unscreen.gif';
//         imgClima.classList.add('imgClima');
//         imgClima.style.display = 'block';
//         return
//     } else if (datos.weather[0].description === 'light rain') {
//         tituloActual.innerHTML = 'Lluvia ligera';
//         imgClima.src = 'imagenes/lluvia-1--unscreen.gif';
//         imgClima.style.display = 'block';
//         return
//     } else if (datos.weather[0].description === "very heavy rain") {
//         tituloActual.innerHTML = 'Fuertes lluvias';
//         imgClima.src = 'imagenes/lluvia-2--unscreen.gif';
//         imgClima.style.width = '200px';
//         imgClima.style.display = 'block';
        
//     }else if(datos.weather[0].description === 'scattered clouds'){
//         tituloActual.innerHTML= "Cielo despejado"
//         imgClima.src='imagenes/nublado-unscreen.gif'
//         imgClima.style.display='block'
//     }else if(datos.weather[0].description === 'heavy intensity rain'){
//         tituloActual.innerHTML='Tormenta'
//         imgClima.src='imagenes/energia-eolica-unscreen.gif'
//         imgClima.style.display='block'
//         imgClima.style.width = '190px';

//     }

    
//     imgClima.style.display = 'block';
//     limpiarSpinner(); // Eliminar spinner despues de mostrar los datos
// }



// function Spinner() {
//     const spinnerContainer = document.querySelector('#spinner');
//     limpiarHtml(spinnerContainer); // Limpiar solo el contenedor del spinner
//     const divSpinner = document.createElement('div');
//     divSpinner.classList.add('sk-fading-circle');

//     imgClima.style.display = 'none';

//     divSpinner.innerHTML = `
//         <div class="sk-circle1 sk-circle"></div>
//         <div class="sk-circle2 sk-circle"></div>
//         <div class="sk-circle3 sk-circle"></div>
//         <div class="sk-circle4 sk-circle"></div>
//         <div class="sk-circle5 sk-circle"></div>
//         <div class="sk-circle6 sk-circle"></div>
//         <div class="sk-circle7 sk-circle"></div>
//         <div class="sk-circle8 sk-circle"></div>
//         <div class="sk-circle9 sk-circle"></div>
//         <div class="sk-circle10 sk-circle"></div>
//         <div class="sk-circle11 sk-circle"></div>
//         <div class="sk-circle12 sk-circle"></div>
//     `;

//     spinnerContainer.appendChild(divSpinner); // Añadir spinner solo en su contenedor
// }

// function limpiarSpinner() {
//     const spinnerContainer = document.querySelector('#spinner');
//     limpiarHtml(spinnerContainer); // Limpiar solo el contenedor del spinner
// }

// function limpiarHtml(selector) {
//     while (selector.firstChild) {
//         selector.removeChild(selector.firstChild);
//     }
// }



setInterval(actualizarHora, 1000);
// function KelvinACentigrados(grados){
//     return parseInt(grados - 273.15);
// }
// function speak(message) {
//     if (synth.speaking) {
//         console.error('Ya estoy hablando.');
//         return;
//     }

//     // Obtener todas las voces disponibles
//     const voices = synth.getVoices();

//     // Filtrar una voz femenina (puede variar según el sistema)
//     const femaleVoice = voices.find(voice => voice.lang.startsWith('es-AR') && voice.name.includes('Female')) || 
//                         voices.find(voice => voice.lang.startsWith('es-AR') && voice.gender === 'female');

//     // Crear la instancia del mensaje
//     const utterThis = new SpeechSynthesisUtterance(message);

//     // Si se encontró una voz femenina, usarla, de lo contrario usar la primera voz en español
//     utterThis.voice = femaleVoice || voices.find(voice => voice.lang.startsWith('es')); 

//     utterThis.onend = () => {
//         console.log('Terminé de hablar.');
//     };

//     utterThis.onerror = (event) => {
//         console.error('Ha ocurrido un error durante la síntesis de voz:', event);
//     };

//     synth.speak(utterThis);
    
// }
