import model from "../model/librosMem.js";

const obtenerTodosLosLibros = () => {
  const productos = model.obtenerTodosLosLibros();
  return productos;
};

const obtenerUnLibro = (id) => {
  const producto = model.obtenerUnLibro(id);
  return producto;
}

export default {
  obtenerTodosLosLibros,
  obtenerUnLibro
};
