import { dataJson } from "./db.js";


export async function verPeliculas (data){
  const peliculas = await data;
  for(let pelicula of peliculas){
    const listItem = document.createElement('li');
    listItem.classList.add('card-movie');
    listItem.innerHTML = `
    <img class="movie__img" src="${pelicula.img}" alt="">
      <style>
       .movie__img{
        border-radius: 2px;
        width: 250px;
        height: 310px;
      </style>
      <div class="movie__title"><h1 class="title">${pelicula.titulo}</h1></div>

      <div class="movie__info">${pelicula.resumen}</div>
      <button data-id="${pelicula.id}" type="button" class="btn-detalles">
    Ver Detalles
    </button>
    `
    movieList.appendChild(listItem);
  };

  document.querySelectorAll('.btn-detalles').forEach((botonID) => {
    botonID.addEventListener('click', (event) => {
      const peliculaId = parseInt(event.target.getAttribute("data-id"));
      const peliculaEncontrada = dataJson.find(pelicula => pelicula.id === peliculaId)
      console.log("ID de la película:", peliculaId, peliculaEncontrada);
      const contenedorEmergente = document.getElementById('hidden');
      contenedorEmergente.innerHTML = ''; // Limpiar el contenedor
      hidden.style.display= 'flex';
      console.log(peliculaEncontrada);
      console.log(typeof(peliculaId));
      crearEstructuraEmergente(peliculaEncontrada);
      const cruzOcultar = document.getElementById('exit-button');
      const ocultoContenedor = document.getElementById('hidden');
      cruzOcultar.addEventListener('click', () =>{
      ocultoContenedor.style.display= 'none';
})  
    });
  });
  }

  
function crearEstructuraEmergente(data){
  
  const containerHidden = document.createElement('div');
  containerHidden.classList.add('container-hidden');

  const cruzBorrar = document.createElement('button');
  cruzBorrar.classList.add('exitButton')
  cruzBorrar.id = 'exit-button';
  cruzBorrar.textContent = 'x'

  const containerImg = document.createElement('div');
  containerImg.classList.add('container__img');

  const imagen = document.createElement('img');
  imagen.classList.add('hidden__img'); 
  imagen.src = data.img;
  imagen.alt = data.titulo;


  containerImg.appendChild(imagen);
  const containerInfo = document.createElement('div');
  containerInfo.classList.add('container__info');

  const h1 = document.createElement('h1');
  h1.classList.add('hidden', 'title');
  h1.textContent = data.titulo;

  const p = document.createElement('p');
  p.classList.add('hidden', 'desc');
  p.textContent = data.resumen;

  containerInfo.appendChild(h1);
  containerInfo.appendChild(p);

  const containerBox = document.createElement('div');
  containerBox.classList.add('container__box');

  const boxReparto = document.createElement('div');
  boxReparto.classList.add('box');

  const h2Reparto = document.createElement('h2');
  h2Reparto.textContent = 'Reparto';

  const liActor1 = document.createElement('li');
  liActor1.classList.add('box__text');
  liActor1.textContent = data.actores[0];

  const liActor2 = document.createElement('li');
  liActor2.classList.add('box__text');
  liActor2.textContent = data.actores[1];

  boxReparto.appendChild(h2Reparto);
  boxReparto.appendChild(liActor1);
  boxReparto.appendChild(liActor2);

  const boxInfo = document.createElement('div');
  boxInfo.classList.add('box');

  const h2Info = document.createElement('h2');
  h2Info.textContent = 'Información';

  const liDuracion = document.createElement('li');
  liDuracion.textContent = data.length;

  const liGenero = document.createElement('li');
  liGenero.classList.add('box__text');
  liGenero.textContent = data.genero;

  const liFecha = document.createElement('li');
  liFecha.classList.add('box__text');
  liFecha.textContent = data.fechaLanzamiento;

  boxInfo.appendChild(h2Info);
  boxInfo.appendChild(liDuracion);
  boxInfo.appendChild(liGenero);
  boxInfo.appendChild(liFecha);

  containerBox.appendChild(boxReparto);
  containerBox.appendChild(boxInfo);
  
  containerHidden.appendChild(containerImg);
  containerHidden.appendChild(containerInfo);
  containerHidden.appendChild(containerBox);

  document.getElementById('hidden').appendChild(cruzBorrar)  
  document.getElementById('hidden').appendChild(containerHidden);
}