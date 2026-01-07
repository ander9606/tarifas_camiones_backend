    import { pool } from '../config/db.js'

export const TarifaModel = {
  obtenerPorCiudad: async (ciudadId) => {
    const [rows] = await pool.query(
      `SELECT 
         tt.id,
         t.nombre AS camion,
         tt.tarifa
       FROM tarifas_transporte tt
       JOIN tipos_camion t ON t.id = tt.tipo_camion_id
       WHERE tt.ciudad_id = ?`,
      [ciudadId]
    )
    console.log('Raw rows:', rows)
    const result = rows.map(row => ({
      ...row,
      tarifa: parseFloat(row.tarifa)
    }))
    console.log('Resultado mapeado:', result)
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