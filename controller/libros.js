import servicio from "../servicio/libros.js"

const obtenerTodosLosLibros =  (req,res) => {
    const { id } = req.params
    const libros = servicio.obtenerTodosLosLibros(id)
    res.json(libros)
}

export default {
    obtenerTodosLosLibros, 
}

