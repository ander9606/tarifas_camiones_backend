import { pool } from '../config/db.js'

export const TipoCamionModel = {

  obtenerTodos: async () => {
    const [rows] = await pool.query(
      'SELECT id, nombre, descripcion FROM tipos_camion ORDER BY id'
    )
    return rows
  },

  obtenerPorId: async (id) => {
    const [rows] = await pool.query(
      'SELECT id, nombre, descripcion FROM tipos_camion WHERE id = ?',
      [id]
    )
    return rows[0]
  },

  crear: async (nombre, descripcion) => {
    const [result] = await pool.query(
      'INSERT INTO tipos_camion (nombre, descripcion) VALUES (?, ?)',
      [nombre, descripcion]
    )
    return result.insertId
  },

  actualizar: async (id, nombre, descripcion) => {
    await pool.query(
      'UPDATE tipos_camion SET nombre = ?, descripcion = ? WHERE id = ?',
      [nombre, descripcion, id]
    )
  },

  eliminar: async (id) => {
    await pool.query(
      'DELETE FROM tipos_camion WHERE id = ?',
      [id]
    )
  }
}