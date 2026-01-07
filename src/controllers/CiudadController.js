import { CiudadModel } from '../models/CiudadModel.js'

export const obtenerCiudadesPorDepartamento = async (req, res) => {
  const { departamentoId } = req.params
  const data = await CiudadModel.obtenerPorDepartamento(departamentoId)
  res.json(data)
}

export const crearCiudad = async (req, res) => {
  const { nombre, departamentoId } = req.body
  const id = await CiudadModel.crear(nombre, departamentoId)
  res.status(201).json({ id, nombre })
}

export const actualizarCiudad = async (req, res) => {
  const { id } = req.params
  const { nombre } = req.body
  await CiudadModel.actualizar(id, nombre)
  res.json({ mensaje: 'Ciudad actualizada' })
}

export const eliminarCiudad = async (req, res) => {
  const { id } = req.params
  await CiudadModel.eliminar(id)
  res.json({ mensaje: 'Ciudad eliminada' })
}