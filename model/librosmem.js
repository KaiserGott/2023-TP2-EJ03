const libros = [
  { id: "1", titulo: "El señor de los anillos", autor: "Tolkien", año: 1954 },
  { id: "2", titulo: "El Padrino", autor: "Mario Puzo", año: 1972 },
  {
    id: "3",
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Márquez",
    año: 1967,
  },
  { id: "4", titulo: "Los Miserables", autor: "Victor Hugo", año: 1862 },
];

const obtenerTodosLosLibros = () => {
  return libros;
};

const obtenerUnLibroPorID = (id) => {
  const libro = libros.find((libro) => libro.id === id);
  return libro;
};

const crearUnLibro = (libro) => {
  // libro.id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1) // ?. optional chaining
  libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1);
  libros.push(libro); //el metodo push retorna el nuevo length de la creacion
  return libro; //retornar el libro con el id asignado
};

const buscarLibroPorTitulo = (tituloLibro) => {
  const libro = libros.find((libro) => libro.titulo === tituloLibro);
  return libro;
};

const borrarUnLibroPorID = (id) => {
  let libroBorrado = {};
  const indexLibro = libros.findIndex((libro) => libro.id === id);
  if (indexLibro != -1) {
    libroBorrado = libros.splice(indexLibro, 1)[0];
  }
  return libroBorrado;
};

const actualizarLibro = (id, libroData) => {
  const indexLibro = libros.findIndex((libro) => libro.id === id);
  if (indexLibro != -1) {
    const libroPrimitivo = libros[indexLibro];
    const libroNuevo = { ...libroPrimitivo, ...libroData };
    libros.splice(indexLibro, 1, libroNuevo);
    return libroNuevo;
  } else {
    return -1; //Si el ID no existe entonces no actualizo o creo entrada de libro.
  }
};

export default {
  obtenerTodosLosLibros,
  obtenerUnLibroPorID,
  crearUnLibro,
  buscarLibroPorTitulo,
  borrarUnLibroPorID,
  actualizarLibro,
};
