import { DepartamentoModel } from '../models/DepartamentoModel.js'

export const obtenerDepartamentos = async (_, res) => {
  const data = await DepartamentoModel.obtenerTodos()
  res.json(data)
}

export const crearDepartamento = async (req, res) => {
  const { nombre } = req.body
  const id = await DepartamentoModel.crear(nombre)
  res.status(201).json({ id, nombre })
}

export const actualizarDepartamento = async (req, res) => {
  const { id } = req.params
  const { nombre } = req.body
  await DepartamentoModel.actualizar(id, nombre)
  res.json({ mensaje: 'Departamento actualizado' })
}

export const eliminarDepartamento = async (req, res) => {
  const { id } = req.params
  await DepartamentoModel.eliminar(id)
  res.json({ mensaje: 'Departamento eliminado' })
}
