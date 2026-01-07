import express from 'express'
import cors from 'cors'
import { pool } from './src/config/db.js'

import departamentoRoutes from './src/routes/departamentoRoutes.js'
import ciudadRoutes from './src/routes/CiudadRoutes.js'
import tipoCamionRoutes from './src/routes/TipoCamionRoutes.js'
import tarifaRoutes from './src/routes/TarifasRoutes.js'

const app = express()

// Configurar CORS con lista blanca de orígenes
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://tarifas-camiones-frontend.vercel.app'
]

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.use('/api/departamentos', departamentoRoutes)
app.use('/api/ciudades', ciudadRoutes)
app.use('/api/tipos-camion', tipoCamionRoutes)
app.use('/api/tarifas', tarifaRoutes)

export default app
export { pool }
