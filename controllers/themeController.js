import Theme from "../models/Theme.js"

export const createTheme = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al crear la tematica')
    }
}
