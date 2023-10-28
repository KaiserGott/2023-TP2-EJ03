import express from "express";
import routerLibros from "./router/libros.js";

const app = express();
//La función express.json() es una función de middleware integrada en Express. Analiza las requests entrantes con cargas JSON y se basa en body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());
//b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());
app.use(express.static("public"));

// API RESTful : Libros
app.use("/libros", routerLibros);

// LISTEN DEL SERVIDOR EXPRESS
const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en http://localhost:${PORT}`)
);
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
