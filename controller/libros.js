import servicio from "../servicio/libros.js"

const obtenerTodosLosLibros =  (req,res) => {
    const libros = servicio.obtenerTodosLosLibros()
    res.json(libros)
}

const obtenerUnLibro = (req,res) => {
    const { id } = req.params
    const libro = servicio.obtenerUnLibro(id)
    res.json(libro)
}

export default {
    obtenerTodosLosLibros,
    obtenerUnLibro 
}

