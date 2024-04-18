import Theme from "../models/Theme.js"

export const getThemes = async (req, res) => {
    try {
        const themes = await Theme.find({})
        if (themes.length === 0) {
            return res.status(400).json({ msg: 'No hay temáticas registradas' })
        }
        res.json(themes)
    } catch (error) {
        console.log(error)

    }
}

export const createTheme = async (req, res) => {
    try {
        const { nameTheme } = req.body
        const existingTheme = await Theme.findOne({ nameTheme })

        if (existingTheme) {
            return res.status(400).json({ msg: 'Esta temática ya está registrada.' })
        }

        const coverImage = req.file ? req.protocol + '://' + req.get('host') + '/' + req.file.path : undefined
        const newTheme = new Theme({ ...req.body, coverImage })
        await newTheme.save()
        res.json(newTheme)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al crear la temática')
    }
}

export const editTheme = async (req, res) => {
    try {
        const newTheme = {}

        let existingTheme = await Theme.findById(req.params.id)
        if (!existingTheme) {
            return res.status(404).json({ msg: 'Temática no encontrada' })
        }
        Object.entries(req.body).forEach(([key, value]) => {
            if (value) {
                newTheme[key] = value
            }
        })
        existingTheme = await Theme.findByIdAndUpdate({ _id: req.params.id }, { $set: newTheme }, { new: true })
        res.json(existingTheme)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al editar la temática')
    }
}

export const deleteTheme = async (req, res) => {
    try {
        const theme = await Theme.findById(req.params.id)

        if (!theme) {
            return res.status(404).json({ msg: 'Temática no encontrada' })
        }
        await Theme.findByIdAndDelete(req.params.id)
        res.json({ msg: 'Se elimino la temática de manera correcta' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar la temática')
    }
}
