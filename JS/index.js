// Constantes inciales
const main = document.getElementById('menu');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById('main-btn');

// Constantes para almacenar contenido
const contenido2 = document.getElementById('contenido-2');

main.addEventListener('click', (e) => {
  // Para confirmar si el click es el btn principal
  if (e.target === mainBtn) {
    contenidoInicial.remove();

    contenido2.append(agregartNota);
  }

  // Para confirmar si el button es de borrar
  if(e.target.id == 'borrar-nota') {
    let checkClick = confirm("Seguro que quieres borrar?");

    if(checkClick == true) {
      contenido2.remove();
    }
  } 

  // para encontrar el elemnto submit de la forma
  if (e.target.id === 'agregar-nota') {
    const agregartNota = e.target;
    console.log(agregartNota);

    // Crear escuchador de eventos para click en el buton agregar
    agregartNota.addEventListener('click', (event) => {
      // Crear constantes de los inputs para obbtener informacion de la forma
      const titulo = document.getElementById('titulo');
      const nota = document.getElementById('nota');
      const fecha = document.getElementById('fecha');
    } )
  }

});

// Crear elemento con HTML
const agregartNota = document.createElement('div');
agregartNota.innerHTML = `
<form id="main.form">
    <input type="text" name="titulo" id="titulo" placeholder="Agregar titulo">
    <input type="text" name="nota" id="nota" placeholder="Agregar tu nota">

    <button type="button" id="borrar-nota">Borrar nota</button>
    <button type="button" id="agregar-fecha">Agregar fecha</button>
  </form>
  `;

  // crear una