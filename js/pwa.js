if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/serviceWorker.js')
      .then(reg => console.log('✅ SW registrado:', reg))
      .catch(err => console.error('❌ Error al registrar el SW:', err));
  } else {
    console.log('❌ Service Workers no soportados');
  }
  
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  
    // Intentar mostrar el prompt de instalación automáticamente
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choice => {
        if (choice.outcome === 'accepted') {
          console.log('✅ Usuario aceptó la instalación');
        } else {
          console.log('❌ Usuario rechazó la instalación');
        }
        deferredPrompt = null;
      });
    }
  });
  