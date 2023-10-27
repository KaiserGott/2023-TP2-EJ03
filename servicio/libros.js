import model from "../model/librosMem.js";

const obtenerTodosLosLibros = () => {
  const libro = model.obtenerTodosLosLibros();
  return libro;
};

const obtenerUnLibro = (id) => {
  const libro = model.obtenerUnLibroPorID(id);
  if (libro == undefined) {
    return "El ID ingresado no corresponde a ningun libro en su base de datos";
  }
  return libro;
};

const crearUnLibro = (libroData) => {
  const tituloLibro = libroData.titulo;
  if (model.buscarLibroPorTitulo(tituloLibro) == undefined) {
    const libroCreado = model.crearUnLibro(libroData);
    return libroCreado;
  } else {
    return "El libro ya existe";
  }
};

const borrarUnLibroPorID = (id) => {
  const libroBorrado = model.borrarUnLibroPorID(id);
  if (libroBorrado == -1) {
    return "El libro no se elimino porque no existe en su base de datos";
  } else {
    return libroBorrado;
  }
};

export default {
  obtenerTodosLosLibros,
  obtenerUnLibro,
  crearUnLibro,
  borrarUnLibroPorID,
};
