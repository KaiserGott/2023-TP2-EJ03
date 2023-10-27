import model from "../model/librosMem.js";

const obtenerTodosLosLibros = () => {
  const libro = model.obtenerTodosLosLibros();
  return libro;
};

const obtenerUnLibro = (id) => {
  const libro = model.obtenerUnLibroPorID(id);
  return libro;
};

const crearUnLibro = (libroData) => {
  const tituloLibro = libroData.titulo;
  //  if (buscarLibroPorTitulo(tituloLibro) === undefined) {

  if (model.buscarLibroPorTitulo(tituloLibro) === undefined) {
    const libroCreado = model.crearUnLibro(libroData);
    return libroCreado;
  } else {
    return "El libro ya existe";
  }
};

export default {
  obtenerTodosLosLibros,
  obtenerUnLibro,
  crearUnLibro
};
