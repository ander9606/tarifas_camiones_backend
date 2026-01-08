import { TarifaModel } from '../models/TarifasModel.js'

export const obtenerTarifasPorCiudad = async (req, res) => {
  const { ciudadId } = req.params
  const data = await TarifaModel.obtenerPorCiudad(ciudadId)
  res.json(data)
}

export const crearTarifa = async (req, res) => {
  const { ciudadId, tipoCamionId, tarifa } = req.body
  
  // Validar que los campos requeridos estén presentes
  if (!ciudadId || !tipoCamionId || tarifa === undefined || tarifa === null) {
    return res.status(400).json({
      error: 'Los campos ciudadId, tipoCamionId y tarifa son requeridos',
      recibidos: { ciudadId, tipoCamionId, tarifa }
    })
  }
  
  // Validar que tarifa sea un número válido
  if (isNaN(tarifa) || Number(tarifa) <= 0) {
    return res.status(400).json({
      error: 'La tarifa debe ser un número mayor a 0'
    })
  }
  
  try {
    const id = await TarifaModel.crear(ciudadId, tipoCamionId, tarifa)
    res.status(201).json({ id })
  } catch (error) {
    console.error('Error al crear tarifa:', error)
    res.status(500).json({
      error: 'Error al crear la tarifa',
      detalle: error.message
    })
  }
}

export const actualizarTarifa = async (req, res) => {
  const { id } = req.params
  const { tarifa } = req.body
  await TarifaModel.actualizar(id, tarifa)
  res.json({ mensaje: 'Tarifa actualizada' })
}

export const eliminarTarifa = async (req, res) => {
  const { id } = req.params
  await TarifaModel.eliminar(id)
  res.json({ mensaje: 'Tarifa eliminada' })
}