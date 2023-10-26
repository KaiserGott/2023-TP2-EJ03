import model from "../model/librosMem.js";

const obtenerTodosLosLibros = () => {
  const productos = model.obtenerTodosLosLibros();
  return productos;
};

const obtenerUnLibro = (id) => {
  const producto = model.obtenerUnLibro(id);
  return producto;
}

const crearUnLibro = libroData => {
  const libroCreado = model.crearUnLibro(libroData);
  return libroCreado;
}

export default {
  obtenerTodosLosLibros,
  obtenerUnLibro,
  crearUnLibro
};
