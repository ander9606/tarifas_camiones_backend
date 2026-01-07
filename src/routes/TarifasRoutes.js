import { Router } from 'express'
import {  obtenerTarifasPorCiudad,
  crearTarifa,
  actualizarTarifa,
  eliminarTarifa } from '../controllers/TarifasController.js'

const router = Router()

router.get('/ciudad/:ciudadId', obtenerTarifasPorCiudad)
router.post('/', crearTarifa)
router.put('/:id', actualizarTarifa)
router.delete('/:id', eliminarTarifa)
export default router
