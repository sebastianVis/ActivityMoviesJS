import { dataJson } from "./js/db.js";
import { renderizarPeliculas } from "./js/frontpage.js";

const movieList = document.getElementById('movieList');
const obtenerPeliculas = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { dataJson; resolve(dataJson);
      }, 1000);
    });
  };



obtenerPeliculas()
      .then(peliculas => {
        renderizarPeliculas(peliculas);
        console.log('sirvio gracias papadios')
      })
      .catch(error => {
        console.error('Error al obtener las películas:', error);
      });


