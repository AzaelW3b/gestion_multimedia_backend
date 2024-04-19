import Content from "../models/Content.js"

export const getContent = async (req, res) => {
    try {
        const contents = await Content.find({}).populate('themeId').populate('createdBy')
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
        newContent.populate('createdBy')
        await newContent.save()
        res.json(newContent)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al crear el contenido')
    }
}

export const editContent = async (req, res) => {
    try {
        const newContent = {}

        let existingContent = await Content.findById(req.params.id)
        if (!existingContent) {
            return res.status(404).json({ msg: 'Contenido no encontrado' })
        }
        Object.entries(req.body).forEach(([key, value]) => {
            if (value) {
                newContent[key] = value
            }
        })
        existingContent = await Content.findByIdAndUpdate({ _id: req.params.id }, { $set: newContent }, { new: true })
        res.json(existingContent)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al editar el contenido')
    }
}

export const deleteContent = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id)

        if (!content) {
            return res.status(404).json({ msg: 'Contenido no encontrado' })
        }
        await Content.findByIdAndDelete(req.params.id)
        res.json({ msg: 'Se elimino el contenido de manera correcta' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar')
    }
}
