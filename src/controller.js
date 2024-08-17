import { pool } from "./database.js";

class LibroController {
    // Obtener todos los libros
    async getAll(req, res) {
        const [result] = await pool.query("SELECT * FROM Libros");
        res.json(result);
      }
    
    // Obtener un libro por su ID
    async getOne(req, res) {
        const id = req.params.id; // Obtiene el ID del libro desde los parámetros de la URL

        try {
            const [result] = await pool.query("SELECT * FROM Libros WHERE id = ?", [id]);
            if (result.length > 0) {
                res.json(result[0]); // Envía el libro encontrado como respuesta
            } else {
                res.status(404).json({ message: "Libro no encontrado" }); // Envía un mensaje de error si no se encuentra el libro
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al buscar el libro" }); // Maneja errores de la consulta
        }
    }

    // Agregar un nuevo libro
    async add(req, res) {
        const Libros = req.body;
        try {
            // Verifica que todos los campos necesarios estén presentes
            if (!Libros.nombre || !Libros.autor || !Libros.categoria || !Libros["anio-publicacion"] || !Libros.ISBN) {
                return res.status(400).json({ message: "Todos los campos son requeridos" });
            }
            
            const [result] = await pool.query(
                "INSERT INTO libros (nombre, autor, categoria, `anio-publicacion`, ISBN) VALUES (?, ?, ?, ?, ?)",
                [
                  Libros.nombre,
                  Libros.autor,
                  Libros.categoria,
                  Libros["anio-publicacion"],
                  Libros.ISBN,
                ]
              );
            res.json({ "Id insertado": result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al agregar el libro" });
        }
    }
    

    // Eliminar un libro proporcionando su ISBN
    async delete(req, res){
        const Libros = req.body;
        try {
            // Primero verifica si el ISBN proporcionado existe en la base de datos
            const [checkResult] = await pool.query("SELECT * FROM libros WHERE ISBN=(?)", [Libros.ISBN]);
            if (checkResult.length === 0) {
                return res.status(404).json({ message: "Libro no encontrado para el ISBN proporcionado" });
            }
            
            const [result] = await pool.query("DELETE FROM libros WHERE ISBN=(?)", [Libros.ISBN]);
            res.json({"Registros eliminados": result.affectedRows});
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al eliminar el libro" });
        }
    }
    

    //Actualizar un libro existente
    async update(req, res){
        const Libros = req.body;
        try {
            // Verifica que todos los campos necesarios estén presentes y el libro exista
            if (!Libros.id || !Libros.nombre || !Libros.autor || !Libros.categoria || !Libros["anio-publicacion"] || !Libros.ISBN) {
                return res.status(400).json({ message: "Todos los campos son requeridos o el libro no existe" });
            }
            
            const [checkResult] = await pool.query("SELECT * FROM libros WHERE id=(?)", [Libros.id]);
            if (checkResult.length === 0) {
                return res.status(404).json({ message: "Libro no encontrado para el ID proporcionado" });
            }
            
            const [result] = await pool.query(
                "UPDATE Libros SET nombre = (?), autor = (?), categoria = (?), `anio-publicacion` = (?), ISBN = ? WHERE id=(?)",
                [
                  Libros.nombre,
                  Libros.autor,
                  Libros.categoria,
                  Libros["anio-publicacion"],
                  Libros.ISBN,
                  Libros.id,
                ]);
            res.json({ "Registro actualizado": result.changedRows });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al actualizar el libro" });
        }
    }
    


}

export const Libros = new LibroController();