import model from "../model/librosmem.js";

const obtenerTodosLosLibros = (id) => {
  const productos = model.obtenerProductos(id);
  return productos;
};

export default {
  obtenerTodosLosLibros,
};
