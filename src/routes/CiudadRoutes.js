import { Router } from 'express'
import { obtenerCiudadesPorDepartamento,
  crearCiudad,
  actualizarCiudad,
  eliminarCiudad } from '../controllers/CiudadController.js'

const router = Router()

router.get('/departamento/:departamentoId', obtenerCiudadesPorDepartamento)
router.post('/', crearCiudad)
router.put('/:id', actualizarCiudad)
router.delete('/:id', eliminarCiudad)
export default router
