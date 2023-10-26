import express from "express";
import routerLibros from "./router/libros.js";


const app = express();
//La función express.json() es una función de middleware integrada en Express. Analiza las requests entrantes con cargas JSON y se basa en body-parser
app.use(express.json());
//app.use(express.urlencoded({extended: true}))      

// API RESTful : Productos
app.use('/libros', routerLibros)

// LISTEN DEL SERVIDOR EXPRESS
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
