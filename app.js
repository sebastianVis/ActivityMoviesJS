import { dataJson  } from "./js/db.js";
import { verPeliculas } from "./js/frontpage.js";

const movieList = document.getElementById('movieList');
const obtenerPeliculas = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { dataJson; resolve(dataJson);
      }, 1000);
    });
  };

obtenerPeliculas()
      .then(peliculas => {
        verPeliculas(peliculas);
        console.log('sirvio gracias papadios')

      })
      .catch(error => {
        console.error('Error al obtener las películas:', error);
      });

const botonBuscar = document.getElementById('searchForMovie');
botonBuscar.addEventListener('click' , () =>{
  search()})

function search(){
  const filtrarPelicula = document.getElementById('search-movie').value.toLowerCase();
  let resultado = document.getElementById('movieList');
  resultado.innerHTML='';
  console.log(filtrarPelicula)
  if (filtrarPelicula === ''){
    obtenerPeliculas();
  }
  const resultadosBusqueda = dataJson.filter(peliculasFiltradas => peliculasFiltradas.titulo.toLowerCase().includes(filtrarPelicula))
  verPeliculas(resultadosBusqueda);
}