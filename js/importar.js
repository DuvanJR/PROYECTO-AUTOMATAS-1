  function mostrarContenido(contenido) {
      const elemento = document.getElementById('contenido-archivo');
      elemento.innerHTML = contenido;
    }
  function leerArchivo(e) {
    const archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    const lector = new FileReader();
    lector.onload = function(e) {
      const contenido = e.target.result;
      mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
  }

  document.querySelector('#archivo1')
    .addEventListener('change', leerArchivo, false);