import Content from "../models/Content.js"

export const getContent = async (req, res) => {
    try {
        const contents = await Content.find({}).populate('themeId')
        if (contents.length === 0) {
            return res.status(400).json({ msg: 'No hay contenido registrado' })
        }
        res.json(contents)
    } catch (error) {
        console.log(error)

    }
}

export const createContent = async (req, res) => {
    try {
        const urlImage = req.file ? req.protocol + '://' + req.get('host') + '/' + req.file.path : undefined
        let newContent = new Content({ ...req.body, urlImage })
        newContent.populate('themeId')
        await newContent.save()
        res.json(newContent)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al crear el contenido')
    }
}