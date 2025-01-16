

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
      <button id="btn-mostrar${pelicula.id}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Ver Detalles
    </button>
    `
    movieList.appendChild(listItem);
  };

  }
