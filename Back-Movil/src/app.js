import express from 'express'
import router from './routes/routes.appfinanzas.js'
import cors from 'cors'

//Se crea una instancia de express
const app = express()
app.use(express.json())

//Se define el puerto

app.set('port', process.env.PORT || 3000)

//Configuración de cors
app.use(cors({origin: '*'}))
app.use('/api', router)

export default app