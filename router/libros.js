import express from "express";
import controller from "../controller/libros.js";

const router = express.Router();

router.get("/", controller.obtenerTodosLosLibros);
router.get("/:id", controller.obtenerUnLibro);
router.post("/", controller.crearUnLibro);
router.put("/:id", controller.actualizarLibro);
router.delete("/:id", controller.borrarUnLibroPorID);

export default router;
