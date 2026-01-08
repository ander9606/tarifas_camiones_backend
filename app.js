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
  origin: function (origin, callback) {
    // Permitir solicitudes sin origen (mobile apps, curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Middleware para manejar errores de CORS
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    res.status(403).json({ error: 'CORS policy violation' })
  } else {
    next(err)
  }
})

app.use(express.json())

app.use('/api/departamentos', departamentoRoutes)
app.use('/api/ciudades', ciudadRoutes)
app.use('/api/tipos-camion', tipoCamionRoutes)
app.use('/api/tarifas', tarifaRoutes)

// Middleware de manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err)
  
  // Si ya se envió una respuesta, pasar al siguiente middleware
  if (res.headersSent) {
    return next(err)
  }
  
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { detalle: err.stack })
  })
})

export default app
export { pool }
