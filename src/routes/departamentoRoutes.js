import { Router } from 'express'
import { obtenerDepartamentos,crearDepartamento, actualizarDepartamento,
    eliminarDepartamento
 } from "../controllers/DepartamentoController.js"
const router = Router()

router.get('/', obtenerDepartamentos)
router.post('/', crearDepartamento)
router.put('/:id', actualizarDepartamento)
router.delete('/:id', eliminarDepartamento)

export default router
