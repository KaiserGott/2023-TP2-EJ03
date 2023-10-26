//import { Express } from "express";
import express from "express";
import controller from "../controller/libros.js";

const router = express.Router();

router.get("/", controller.obtenerTodosLosLibros);
router.get("/:id", controller.obtenerUnLibro);
router.post("/", controller.crearUnLibro);
router.put("/:id", controller.actalizarLibro);
router.delete("/:id", controller.borarUnLibro);

export default router;
