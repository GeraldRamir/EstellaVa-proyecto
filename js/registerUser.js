// Inicializa Firebase si no lo hiciste ya
// firebase.initializeApp({ ... }); // tu configuración
const firebaseConfig = {
  apiKey: "AIzaSyDG_m71UlmqMJWh2fsmWruogyw4rOZzRyc",
  authDomain: "ls-conection.firebaseapp.com",
  projectId: "ls-conection",
  storageBucket: "ls-conection.firebasestorage.app",
  messagingSenderId: "355653094451",
  appId: "1:355653094451:web:6fab60e3511eaada7c6746",
  measurementId: "G-PP9Y43NE2N"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
console.log("Firebase inicializado");

const auth = firebase.auth();

document.getElementById("formRegistro").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailRegistro").value;
  const password = document.getElementById("passwordRegistro").value;
  const mensaje = document.getElementById("mensajeRegistro");

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      mensaje.textContent = "¡Registro exitoso!";
      mensaje.style.color = "green";
      console.log("Usuario registrado:", userCredential.user);
      // Redireccionar o cargar tareas si deseas:
      // cargarTareasDesdeFirestore();
      window.location.href = "auth.html"; // Redirige al dashboard
    })
    .catch((error) => {
      mensaje.textContent = "Error: " + error.message;
      mensaje.style.color = "red";
      console.error("Error al registrar:", error);
    });
});
