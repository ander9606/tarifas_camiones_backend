import { TarifaModel } from '../models/TarifasModel.js'

export const obtenerTarifasPorCiudad = async (req, res) => {
  const { ciudadId } = req.params
  const data = await TarifaModel.obtenerPorCiudad(ciudadId)
  res.json(data)
}

export const crearTarifa = async (req, res) => {
  const { ciudadId, tipoCamionId, tarifa } = req.body
  const id = await TarifaModel.crear(ciudadId, tipoCamionId, tarifa)
  res.status(201).json({ id })
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