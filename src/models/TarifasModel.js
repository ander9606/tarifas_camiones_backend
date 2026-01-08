    import { pool } from '../config/db.js'

export const TarifaModel = {
  obtenerPorCiudad: async (ciudadId) => {
    const [rows] = await pool.query(
      `SELECT 
         tt.id,
         tt.tipo_camion_id,
         tt.ciudad_id,
         t.nombre AS camion,
         t.descripcion,
         tt.tarifa
       FROM tarifas_transporte tt
       JOIN tipos_camion t ON t.id = tt.tipo_camion_id
       WHERE tt.ciudad_id = ?
       ORDER BY t.nombre ASC`,
      [ciudadId]
    )
    const result = rows.map(row => ({
      id: row.id,
      tipo_camion_id: row.tipo_camion_id,
      ciudad_id: row.ciudad_id,
      camion: row.camion,
      descripcion: row.descripcion,
      tarifa: parseFloat(row.tarifa)
    }))
    return result
  },

  obtenerUna: async (ciudadId, tipoCamionId) => {
    const [rows] = await pool.query(
      'SELECT * FROM tarifas_transporte WHERE ciudad_id = ? AND tipo_camion_id = ?',
      [ciudadId, tipoCamionId]
    )
    if (rows.length === 0) return null
    return {
      ...rows[0],
      tarifa: parseFloat(rows[0].tarifa)
    }
  },

  crear: async (ciudadId, tipoCamionId, tarifa) => {
    const [result] = await pool.query(
      `INSERT INTO tarifas_transporte (ciudad_id, tipo_camion_id, tarifa)
       VALUES (?, ?, ?)`,
      [ciudadId, tipoCamionId, tarifa]
    )
    return result.insertId
  },

  actualizar: async (id, tarifa) => {
    await pool.query(
      'UPDATE tarifas_transporte SET tarifa = ? WHERE id = ?',
      [tarifa, id]
    )
  },

  eliminar: async (id) => {
    await pool.query(
      'DELETE FROM tarifas_transporte WHERE id = ?',
      [id]
    )
  }
}