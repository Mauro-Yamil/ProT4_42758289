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
    }

    // Eliminar un libro
    async delete(req, res){
        const Libros = req.body;
        const [result] = await pool.query("DELETE FROM libros WHERE id=(?)", [Libros.id]);
        res.json({"Registros eliminados": result.affectedRows})
    }

    //Actualizar un libro existente
    async update(req, res){
        const Libros = req.body;
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
    }


}

export const Libros = new LibroController();