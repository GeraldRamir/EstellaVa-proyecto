
const dia = document.querySelector('#dia');
const tituloFechaAct = document.querySelector('#fechaActual');
const formulario = document.querySelector('#formulario');
const tituloActual = document.querySelector('#tituloActual');
const imgClima = document.querySelector('#imgClima');
const climaActual = document.querySelector('#climaActual');
const contenedorClima = document.querySelector('#contenedorClima');
const resultadoClima = document.querySelector('.resultadoClima');
const btnMicrofono = document.querySelector('#mic-btn');
let recognition;
let synth = window.speechSynthesis;
const body = document.querySelector('body');
moment.locale('es');
const fechaActual = moment().format('LL');
tituloFechaAct.textContent = fechaActual;
const diaActual = moment().format('dddd');
dia.textContent = `${diaActual}`;

btnMicrofono.addEventListener('click',ejecutarSpeech)
document.addEventListener("DOMContentLoaded", function () {
    console.log(document.getElementById("temperaturaTotal")); // ¿es null?


    

  });

setInterval(actualizarHora, 1000);

function actualizarHora() {
  const hora = document.querySelector('#hora');
  const horaActual = moment().format('h:mm:ss a');
  hora.innerHTML = `Hora actual: ${horaActual}`;
}

btnMicrofono.addEventListener('click', ejecutarSpeech);

function ejecutarSpeech() {
  const SpeechRecognition = webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.interimResults = false;

  recognition.start();

  recognition.onresult = e => {
    const speechResult = e.results[0][0].transcript;
    consultarAPI(speechResult);
  };
}

async function consultarAPI(ciudad) {
  const appId = '5030579228c9c8029a2d303ab488c58d';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appId}`;

  try {
    Spinner();
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    limpiarSpinner();
    mostrarClima(datos);
    speak(`El clima de ${ciudad} es ${climaActual.textContent}`);
  } catch (error) {
    limpiarSpinner();
    console.error("Error al obtener datos:", error);
  }
}

function mostrarClima(datos) {
    console.log(datos);
  
    const {
      name,
      coord: { lat, lon },
      main: { temp, temp_max, temp_min, humidity, feels_like, pressure },
      wind: { speed },
      clouds: { all: cloudiness },
      sys: { country },
      weather,
      visibility,
      dt
    } = datos;
  
    const descripcion = weather[0].description;
  
    // Mostrar temperatura actual
    const temperatura = document.querySelector('#temperaturaTotal');
    const grados = KelvinACentigrados(temp);
    temperatura.innerHTML = `${grados}°C`;
  
    // Mostrar humedad
    const humedadElement = document.querySelector('#humedad');
    humedadElement.innerHTML = `${humidity}% DE HUMEDAD`;
  
    // Mostrar temperatura máxima
    const temperaturaMax = document.querySelector('.gradosMax');
    const gradosMax = KelvinACentigrados(temp_max);
    temperaturaMax.innerHTML = `${gradosMax}°C`;
  
    // Mostrar temperatura mínima
    const temperaturaMin = document.querySelector('.gradosMin');
    const gradosMin = KelvinACentigrados(temp_min);
    temperaturaMin.innerHTML = `${gradosMin}°C`;
  
    // Mostrar velocidad del viento en km/h
    const velocidad = document.querySelector('.velocidadViento');
    const velocidadViento = (speed * 3.6).toFixed(2);
    velocidad.innerHTML = `${velocidadViento} km/h`;
  
    // Mostrar imagen del clima según descripción
    imgClima.style.display = 'block';
    imgClima.classList.add('imgClima');
  
    if (descripcion.includes('cloud')) {
      tituloActual.innerHTML = 'Cielo cubierto';
      imgClima.src = 'imagenes/nubes-unscreen.gif';
    } else if (descripcion.includes('rain')) {
      tituloActual.innerHTML = 'Lluvia';
      imgClima.src = 'imagenes/lluvia-1--unscreen.gif';
    } else if (descripcion.includes('clear')) {
      tituloActual.innerHTML = 'Cielo despejado';
      imgClima.src = 'imagenes/nublado-unscreen.gif';
    } else {
      tituloActual.innerHTML = descripcion.charAt(0).toUpperCase() + descripcion.slice(1);
      imgClima.src = 'imagenes/default.gif';
    }
  
    // Llamada a gráfico con valores corregidos
    actualizarGrafico(
      temp,
      temp_min,
      temp_max,
      feels_like,
      humidity,
      speed,
      pressure,
      cloudiness,
      visibility
    );
  }
  
function KelvinACentigrados(kelvin) {
  return parseInt(kelvin - 273.15);
}

function Spinner() {
  const spinnerContainer = document.querySelector('#spinner');
  limpiarHtml(spinnerContainer);
  const divSpinner = document.createElement('div');
  divSpinner.classList.add('sk-fading-circle');
  divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
  `;
  spinnerContainer.appendChild(divSpinner);
}

function limpiarSpinner() {
  const spinnerContainer = document.querySelector('#spinner');
  limpiarHtml(spinnerContainer);
}

function limpiarHtml(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}

function speak(message) {
    if (synth.speaking) {
        console.error('Ya estoy hablando.');
        return;
    }

    // Obtener todas las voces disponibles
    const voices = synth.getVoices();

    // Filtrar una voz femenina (puede variar según el sistema)
    const femaleVoice = voices.find(voice => voice.lang.startsWith('es-AR') && voice.name.includes('Female')) || 
                        voices.find(voice => voice.lang.startsWith('es-AR') && voice.gender === 'female');

    // Crear la instancia del mensaje
    const utterThis = new SpeechSynthesisUtterance(message);

    // Si se encontró una voz femenina, usarla, de lo contrario usar la primera voz en español
    utterThis.voice = femaleVoice || voices.find(voice => voice.lang.startsWith('es')); 

    utterThis.onend = () => {
        console.log('Terminé de hablar.');
    };

    utterThis.onerror = (event) => {
        console.error('Ha ocurrido un error durante la síntesis de voz:', event);
    };

    synth.speak(utterThis);
    
}

// ===========================
// GRAFICO DE TEMPERATURA
// ===========================
// 1. Primero, declara tempChart como undefined
let tempChart;

window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('tempChart').getContext('2d');
  tempChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Temp Actual', 'Min', 'Max', 'Sensación', 'Humedad %', 'Viento (m/s)'],
      datasets: [{
        label: 'Datos climáticos de hoy',
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: [
          '#1976D2', '#64B5F6', '#0288D1', '#4FC3F7', '#81D4FA', '#29B6F6'
        ],
        borderColor: '#0D47A1',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1200,
        easing: 'easeInOutQuart'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});



function actualizarGrafico(temp, tempMin, tempMax, feelsLike, humidity, windSpeed) {
    if (tempChart) {
      tempChart.data.labels = ['Temp Actual', 'Min', 'Max', 'Sensación', 'Humedad %', 'Viento (m/s)'];
      tempChart.data.datasets[0].data = [temp, tempMin, tempMax, feelsLike, humidity, windSpeed];
      tempChart.update();
    }
  }
  

