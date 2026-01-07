import { pool } from '../config/db.js'

export const CiudadModel = {
  obtenerPorDepartamento: async (departamentoId) => {
    const [rows] = await pool.query(
      'SELECT id, nombre FROM ciudades WHERE departamento_id = ?',
      [departamentoId]
    )
    return rows
  },

  crear: async (nombre, departamentoId) => {
    const [result] = await pool.query(
      'INSERT INTO ciudades (nombre, departamento_id) VALUES (?, ?)',
      [nombre, departamentoId]
    )
    return result.insertId
  },

  actualizar: async (id, nombre) => {
    await pool.query(
      'UPDATE ciudades SET nombre = ? WHERE id = ?',
      [nombre, id]
    )
  },

  eliminar: async (id) => {
    await pool.query(
      'DELETE FROM ciudades WHERE id = ?',
      [id]
    )
  }
}