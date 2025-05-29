const auth = firebase.auth();
auth.onAuthStateChanged(user => {
    const userInfo = document.getElementById("userInfo");
    const userEmail = document.getElementById("userEmail");
  if (user) {
    console.log("Usuario autenticado:", user.email);
    // cargarTareasDesdeFirestore(user.uid);
        userInfo.style.display = "flex";
    userEmail.textContent = user.email;
  } else {
    console.log("Sesión cerrada");
    userInfo.style.display = "none";
    userEmail.textContent = "";
  }

});
// Mostrar info del usuario cuando inicia sesión


// Cerrar sesión
document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut()
    .then(() => {
      console.log("Sesión cerrada");
      // Puedes redirigir si lo deseas:
      // window.location.href = 'login.html';
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
});