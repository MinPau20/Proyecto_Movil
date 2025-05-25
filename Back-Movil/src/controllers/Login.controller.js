import { getConnection } from "../database/database.js"
import jwt from "jsonwebtoken";

const SECRET_KEY = "claveMovil";

export const login = async (req, res) => {
    const { email, contraseña } = req.body

    try{
        const connection = await getConnection()
        const [result] = await connection.query('select * from Usuarios where email = ?',[email])
        console.log("conectado")

        if (result.length === 0) return res.status(401).json({ messaje: "Email no encontrado"})

        const user = {id: result.id_usuario, username: result.usuario};
        const token = jwt.sign(user, SECRET_KEY, {expiresIn: '1h'})
        res.json({token})

        const usuario = result[0]

        if (contraseña === usuario.contraseña){
            console.log("Login válido. Bienvenido ", usuario.usuario)
            return res.status(200).json({ messaje: "Inicio de sesión válido ", usuario})    
        } else {
            console.log("Contraseña incorrecta")
            return res.status(401).json({ messaje: "Contraseña incorrecta"})
        }

    } catch (error){
        console.error("Error ", error)
        return res.status(500).json({ messaje: "Error del servidor"})
    }
}

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if(!token) return res.status(402).json({messaje: "Token no encontrado, inicia sesión"})

    jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decode)=>{
    req.user = decode

    next()
    })
}


export const metodoLogin = {
    login
}