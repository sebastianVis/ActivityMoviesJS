

export const renderizarPeliculas = peliculas => {
    const movieList = document.getElementById('movieList');
    peliculas.forEach(pelicula => {
      const listItem = document.createElement('li'); //Se crea un elemento de listas bajo el ID movieList
      listItem.classList.add('card-movie'); //Se crea el elemento card-movie que contiene las tarjetas
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
      <button id="btn-mostrar" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Ver Detalles
    </button>
      
    
    `; //Se agrega al HTML las clases de la tarjeta

    movieList.appendChild(listItem); // Se envia la informacion al html
  });
};


