import { Router } from "express";
import { Libros } from "./controller.js"

export const router = Router()

router.get("/Libros", Libros.getAll);
router.post("/Libros", Libros.add);
router.delete("/Libros", Libros.delete);
router.put("/Libros", Libros.update);