import { TipoCamionModel } from '../models/TipoCamionModel.js'

export const obtenerTiposCamion = async (_, res) => {
  const data = await TipoCamionModel.obtenerTodos()
  res.json(data)
}

export const obtenerTipoCamion = async (req, res) => {
  const { id } = req.params
  const tipo = await TipoCamionModel.obtenerPorId(id)

  if (!tipo) {
    return res.status(404).json({ mensaje: 'Tipo de camión no encontrado' })
  }

  res.json(tipo)
}

export const crearTipoCamion = async (req, res) => {
  const { nombre, descripcion } = req.body
  const id = await TipoCamionModel.crear(nombre, descripcion)
  res.status(201).json({ id, nombre, descripcion })
}

export const actualizarTipoCamion = async (req, res) => {
  const { id } = req.params
  const { nombre, descripcion } = req.body

  await TipoCamionModel.actualizar(id, nombre, descripcion)
  res.json({ mensaje: 'Tipo de camión actualizado' })
}

export const eliminarTipoCamion = async (req, res) => {
  const { id } = req.params
  await TipoCamionModel.eliminar(id)
  res.json({ mensaje: 'Tipo de camión eliminado' })
}
