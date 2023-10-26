const libros = [
    { id: "1", nombre: 'El señor de los anillos', autor: 'Tolkien', precio: 1000, stock: 55 },
    { id: "2", nombre: 'El Padrino', autor: 'Mario Puzo', precio: 1250, stock: 35 },
    { id: "3", nombre: 'MoCien años de soledad', autor: 'Gabriel Garcia Márquez', precio: 1200, stock: 45},
]

const obtenerTodosLosLibros = () =>{
    return libros;
}

export default {
    obtenerTodosLosLibros
}