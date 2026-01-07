import { pool } from '../config/db.js'

export const DepartamentoModel = {
  obtenerTodos: async () => {
    const [rows] = await pool.query(
      'SELECT id, nombre FROM departamentos ORDER BY nombre'
    )
    return rows
  },

  crear: async (nombre) => {
    const [result] = await pool.query(
      'INSERT INTO departamentos (nombre) VALUES (?)',
      [nombre]
    )
    return result.insertId
  },

  actualizar: async (id, nombre) => {
    await pool.query(
      'UPDATE departamentos SET nombre = ? WHERE id = ?',
      [nombre, id]
    )
  },

  eliminar: async (id) => {
    await pool.query(
      'DELETE FROM departamentos WHERE id = ?',
      [id]
    )
  }
}