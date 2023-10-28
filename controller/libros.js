import servicio from "../servicio/libros.js"

const obtenerTodosLosLibros =  (req,res) => {
    const libros = servicio.obtenerTodosLosLibros()
    res.json(libros)
}

const obtenerUnLibro = (req,res) => {
    const { id } = req.params
    console.log(id)
    const libro = servicio.obtenerUnLibro(id)
    res.json(libro)
}

const crearUnLibro = (req,res) => {
    const libroData = req.body
    const libroCreado = servicio.crearUnLibro(libroData)
    res.json(libroCreado)
}

const borrarUnLibroPorID = (req,res) => {
    const {id} = req.params
    const libroBorrado = servicio.borrarUnLibroPorID(id)
    res.json(libroBorrado)
}

const actualizarLibro = (req,res) => {
    const {id} = req.params
    const libroData = req.body
    const libroActualizado = servicio.actualizarLibro(id, libroData)
    res.json(libroActualizado)
}

export default {
    obtenerTodosLosLibros,
    obtenerUnLibro,
    crearUnLibro,
    borrarUnLibroPorID,
    actualizarLibro
}

