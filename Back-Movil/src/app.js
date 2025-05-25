import express from 'express'
import router from './routes/routes.appfinanzas.js'
import cors from 'cors'
import db from './database/database.js';
import jwt from "jsonwebtoken"

//Se crea una instancia de express
const app = express()
app.use(express.json())
app.use('/api', router)

//Se define el puerto
app.set('port', process.env.PORT || 3000)


const SECRET_KEY = "claveMovil";

app.post('/login', (req, res)  => {
    const {email, contraseña} = req.body
    if(!email || !contraseña) return res.status(400).json({ message: 'Rellena los campos correo y contraseña'})
    
    db.query('select id_usuario, usuario, contraseña from Usuarios where = ?',[email], (err, results) => {

        if(err) return res.status(500).json({ message: 'Error en el servidor' })
        if (results.length === 0) return res.status(401).json({ message: 'Usuario no encontrado' })

        const usuarioBD = results[0]        
        if(usuarioBD.contraseña !== contraseña) return res.status(401).json({ message: 'contraseña incorrecta'})
        
        const user = {id: usuarioBD.id_usuario, username: usuarioBD.usuario};
        const token = jwt.sign(user, SECRET_KEY, {expiresIn: '1h'})
        res.json({token})
    })
})

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if(!token) return res.status(402).json({messaje: "Token no encontrado, inicia sesión"})

    jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decode)=>{
    req.user = decode
    
    next()
    })
}


export default app