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
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    // Redirige si no está autenticado
    alert("Debes iniciar sesión para acceder.");
    window.location.href = "auth.html"; // o la ruta de tu login
  } else {
    console.log("Usuario autenticado:", user.email);
  }
});
