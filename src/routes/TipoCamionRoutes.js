import { Router } from 'express'
import {  obtenerTiposCamion,
  obtenerTipoCamion,
  crearTipoCamion,
  actualizarTipoCamion,
  eliminarTipoCamion } from '../controllers/TipoCamionController.js'

const router = Router()

router.get('/', obtenerTiposCamion)
router.get('/:id', obtenerTipoCamion)
router.post('/', crearTipoCamion)
router.put('/:id', actualizarTipoCamion)
router.delete('/:id', eliminarTipoCamion)

export default router
