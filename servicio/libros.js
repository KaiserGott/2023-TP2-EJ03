import model from "../model/librosMem.js";

const obtenerTodosLosLibros = (id) => {
  const productos = model.obtenerTodosLosLibros(id);
  return productos;
};

export default {
  obtenerTodosLosLibros
};
