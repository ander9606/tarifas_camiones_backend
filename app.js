import express from 'express'
import cors from 'cors'
import { pool } from './src/config/db.js'

import departamentoRoutes from './src/routes/departamentoRoutes.js'
import ciudadRoutes from './src/routes/CiudadRoutes.js'
import tipoCamionRoutes from './src/routes/TipoCamionRoutes.js'
import tarifaRoutes from './src/routes/TarifasRoutes.js'

const app = express()

// Configurar CORS para producción
const allowedOrigins = [
  'http://localhost:5173', // Desarrollo local
  'http://localhost:3000',
  process.env.FRONTEND_PAGE // URL del frontend en producción (Vercel)
].filter(Boolean)

console.log('🔒 CORS allowedOrigins:', allowedOrigins)

// CORS permisivo para debug
app.use(cors())

app.use(express.json())

app.use('/api/departamentos', departamentoRoutes)
app.use('/api/ciudades', ciudadRoutes)
app.use('/api/tipos-camion', tipoCamionRoutes)
app.use('/api/tarifas', tarifaRoutes)

export default app
export { pool }
