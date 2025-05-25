import { getConnection } from "../database/database.js"

export const login = async (req, res) => {
    let connection
    const { email, contraseña } = req.body

    try{
        connection = await getConnection()
        const [result] = await connection.query('select * from Usuarios where email = ?',[email])
        console.log("conectado")

        if (result.length === 0){
            console.log("Email no encontrado")
            return res.status(401).json({ messaje: "Email no encontrado"})
        }

        let usuario = result[0]

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

export const metodoLogin = {
    login
}