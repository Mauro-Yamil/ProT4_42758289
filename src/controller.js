import { pool } from "./database.js";

class LibroController {
    // Obtener todos los libros
    async getAll(req, res) {
        const [result] = await pool.query("SELECT * FROM Libros");
        res.json(result);
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