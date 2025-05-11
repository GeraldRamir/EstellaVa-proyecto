// === Variables Globales ===
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = false;

let tareas = [];
let reconocimientoActivo = false;

const startBtn = document.getElementById("start-voice");
const statusText = document.getElementById("status");
const taskList = document.getElementById("task-list");
const importanciaResumen = document.getElementById("importanciaResumen");

const ctx = document.getElementById("categoryChart").getContext("2d");
let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Trabajo", "Estudio", "Hogar", "Deportes", "Ocio"], // etiquetas de categorías
    datasets: [
      {
        label: "Tareas por Categoría",
        data: [5, 3, 7, 2, 4], // cantidad de tareas por categoría
        fill: true,
        tension: 0.4,
        backgroundColor: "rgba(0, 123, 255, 0.3)",  // azul claro
        borderColor: "rgba(0, 123, 255, 1)",
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(0, 123, 255, 1)"
      },
      {
        label: "Importancia Alta",
        data: [2, 1, 4, 1, 2], // cantidad de tareas con alta importancia
        fill: true,
        tension: 0.4,
        backgroundColor: "rgba(220, 53, 69, 0.3)",  // rojo claro
        borderColor: "rgba(220, 53, 69, 1)",
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(220, 53, 69, 1)"
      }
    ]
  },
  options: {
    responsive: true,
    aspectRatio: 1.5,  // Controla la proporción entre el ancho y la altura (valor mayor hace el gráfico más "fino")
    interaction: {
      mode: "index",
      intersect: false
    },
    stacked: false,
    plugins: {
      legend: {
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "bold"
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#333",
          max: 10, // Limita el máximo de la escala en el eje Y para hacerlo más "fino"
          min: 0    // Asegura que no haya valores negativos
        },
        grid: {
          color: "#eee"
        }
      },
      x: {
        ticks: {
          color: "#333"
        },
        grid: {
          display: false
        }
      }
    }
  }
});




function actualizarGrafico() {
  const categorias = {};
  const importanciaAlta = {};

  tareas.forEach(t => {
    categorias[t.categoria] = (categorias[t.categoria] || 0) + 1;
    if (t.importancia === "Alta") {
      importanciaAlta[t.categoria] = (importanciaAlta[t.categoria] || 0) + 1;
    }
  });

  const labels = Object.keys(categorias);
  const dataCategorias = labels.map(cat => categorias[cat]);
  const dataImportancia = labels.map(cat => importanciaAlta[cat] || 0);

  chart.data.labels = labels;
  chart.data.datasets[0].data = dataCategorias;
  chart.data.datasets[1].data = dataImportancia;
  chart.update();

  // === Leyenda personalizada ===
  const colores = ["#0d6efd", "#198754", "#dc3545", "#fd7e14", "#6f42c1", "#20c997"]; // Azul, verde, rojo, naranja, morado, turquesa
  const leyenda = document.getElementById("leyendaCategorias");
  leyenda.innerHTML = "";

  labels.forEach((cat, i) => {
    const color = colores[i % colores.length];
    const cantidad = categorias[cat];
    const li = document.createElement("li");
    li.innerHTML = `<span style="color: ${color};">●</span> <strong>${cat}:</strong> ${cantidad} tareas`;
    leyenda.appendChild(li);
  });
}



function actualizarImportancia() {
  const resumen = { Alta: 0, Media: 0, Baja: 0 };
  tareas.forEach(t => resumen[t.importancia]++);
  importanciaResumen.innerHTML = `
    <p><span class="badge bg-danger">Alta:</span> ${resumen.Alta}</p>
    <p><span class="badge bg-warning text-dark">Media:</span> ${resumen.Media}</p>
    <p><span class="badge bg-success">Baja:</span> ${resumen.Baja}</p>
  `;
}

function renderTareas() {
  taskList.innerHTML = "";
  tareas.forEach((t, i) => {
    const div = document.createElement("div");
    div.className = "mb-3 p-3 border rounded bg-light d-flex justify-content-between align-items-start";
    div.innerHTML = `
      <div>
        <h5>${t.titulo}</h5>
        <p>${t.descripcion}</p>
        <span class="badge bg-primary">${t.categoria}</span>
        <span class="badge bg-${t.importancia === "Alta" ? "danger" : t.importancia === "Media" ? "warning text-dark" : "success"}">${t.importancia}</span>
      </div>
      <button class="btn btn-sm btn-outline-secondary" onclick="editarTarea(${i})">✏️</button>
    `;
    taskList.appendChild(div);
  });
}

function agregarTarea(tarea) {
  tareas.unshift(tarea);
  renderTareas();
  actualizarGrafico();
  actualizarImportancia();
}

function hablar(texto) {
  return new Promise((resolve) => {
    const msg = new SpeechSynthesisUtterance(texto);
    msg.lang = "es-ES";
    msg.onend = resolve;
    speechSynthesis.speak(msg);
  });
}

function escuchar() {
  return new Promise((resolve, reject) => {
    if (reconocimientoActivo) {
      recognition.abort(); // Detenemos cualquier escucha anterior
      reconocimientoActivo = false;
    }

    recognition.start();
    reconocimientoActivo = true;

    recognition.onresult = (event) => {
      const texto = event.results[0][0].transcript.trim();
      console.log("Texto recibido:", texto);
      resolve(texto);
    };

    recognition.onerror = (e) => {
      recognition.stop();
      reconocimientoActivo = false;
      console.error("Error de reconocimiento:", e);
      reject(e);
    };

    recognition.onend = () => {
      reconocimientoActivo = false;
    };
  });
}

async function escucharYProcesarPregunta(pregunta) {
  await hablar(pregunta);
  return await escuchar();
}

async function agregarTareaConVoz() {
  try {
    statusText.textContent = "🎤 Iniciando el flujo de tareas por voz...";

    const titulo = await escucharYProcesarPregunta("¿Cuál es el título de la tarea?");
    const descripcion = await escucharYProcesarPregunta("¿Cuál es la descripción?");
    const categoria = await escucharYProcesarPregunta("¿Cuál es la categoría?");
    const importancia = await escucharYProcesarPregunta("¿Cuál es la importancia? Alta, Media o Baja.");

    const nuevaTarea = {
      titulo,
      descripcion,
      categoria,
      importancia: importancia.charAt(0).toUpperCase() + importancia.slice(1).toLowerCase()
    };

    agregarTarea(nuevaTarea);
    statusText.innerHTML = "✅ Tarea agregada por voz correctamente.";
    setTimeout(() => {
      statusText.textContent = "Dime que tarea quieres agregar.";
    }, 3000);
  } catch (error) {
    console.error("Error al procesar la tarea:", error);
    statusText.textContent = "❌ Hubo un problema al procesar la tarea.";
  }
}

// Evento de botón
startBtn.addEventListener("click", agregarTareaConVoz);
