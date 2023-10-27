const libros = [
    { id: "1", titulo: 'El señor de los anillos', autor: 'Tolkien', precio: 1000, stock: 55 },
    { id: "2", titulo: 'El Padrino', autor: 'Mario Puzo', precio: 1250, stock: 35 },
    { id: "3", titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Márquez', precio: 1200, stock: 45},
]

const obtenerTodosLosLibros = () => {
    return libros;
}

const obtenerUnLibroPorID = (id) => {
    const libro = libros.find(libro => libro.id === id);
    return libro;
}

const crearUnLibro = libro => {
   // libro.id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1) // ?. optional chaining
    libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1)
    libros.push(libro); //el metodo push retorna el nuevo length de la creacion
    return libro;
}
    
const buscarLibroPorTitulo = tituloLibro => {
    const libro = libros.find(libro => libro.titulo === tituloLibro);
    return libro;
}

const borrarUnLibroPorID = (id) => {
    let libroBorrado = {}
    const indexLibro = libros.findIndex(libro => libro.id === id);
    if(indexLibro != -1) {
        libroBorrado = libros.splice(indexLibro,1)[0] 
    }
    return libroBorrado
}





export default {
    obtenerTodosLosLibros,
    obtenerUnLibroPorID,
    crearUnLibro,
    buscarLibroPorTitulo,
    borrarUnLibroPorID
}