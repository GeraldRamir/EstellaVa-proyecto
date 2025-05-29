// import { cargarTareasDesdeFirestore } from "./Dashboard";

// Initialize Firebase

document.getElementById("btnLogin").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  iniciarSesion(email, pass);
  if (email && pass) {
    window.location.href = "main.html"; // Redirige al dashboard
  }

});
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

// Obtener Auth y proveedor de Google
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const btnGoogle = document.getElementById("btnGoogle");

  if (!btnGoogle) {
    console.error("No se encontró el botón con id 'btnGoogle'");
    return;
  }

  console.log("Botón Google encontrado");

  btnGoogle.addEventListener("click", () => {
    console.log("Click en botón Google");

    auth.signInWithPopup(provider)
      .then((result) => {
        console.log("Inicio de sesión exitoso");
        const user = result.user;
        console.log("Usuario autenticado:", user.displayName, user.email);

        // Aquí puedes mostrar el dashboard o cargar las tareas
        cargarDashboard();
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  });
});

// Función de ejemplo: cargar el dashboard solo si el usuario está autenticado
function cargarDashboard() {
    window.location.href = "main.html"; // Redirige al dashboard

}
document.getElementById("btnLogout").addEventListener("click", () => {
  cerrarSesion();
});
// Registro con email y contraseña
 function registrarUsuario(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

// Login con email y contraseña
 function iniciarSesion(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

// Login con Google (opcional)
//  function iniciarConGoogle() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   return auth.signInWithPopup(provider);
// }

// Logout
 function cerrarSesion() {
  return auth.signOut();
}

// Escucha de sesión (invoca tareas si hay login)
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Usuario autenticado:", user.email);
    cargarTareasDesdeFirestore(user.uid);
  } else {
    console.log("Sesión cerrada");
  }
});

