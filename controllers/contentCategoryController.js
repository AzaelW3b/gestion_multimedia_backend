import ContentCategory from "../models/ContentCategory.js"

export const getContentCategorys = async (req, res) => {
    try {
        const contentCategorys = await ContentCategory.find({})
        if (contentCategorys.length === 0) {
            return res.status(400).json({ msg: 'No hay categorias registradas' })
        }
        res.json(contentCategorys)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error  al obtener las categorias')
    }
}

export const createContentCategory = async (req, res) => {
    try {
        const { nameCategory } = req.body
        const existingContentCategory = await ContentCategory.findOne({ nameCategory })

        if (existingContentCategory) {
            return res.status(400).json({ msg: 'Esta categoria ya está registrada.' })
        }

        const newContentCategory = new ContentCategory(req.body)
        await newContentCategory.save()
        res.json(newContentCategory)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al crear la categoria')
    }
}

export const editCotentCategory = async (req, res) => {
    try {
        const newCategory = {}

        let existingContentCategory = await ContentCategory.findById(req.params.id)
        if (!existingContentCategory) {
            return res.status(404).json({ msg: 'Categoria no encontrada' })
        }
        Object.entries(req.body).forEach(([key, value]) => {
            if (value) {
                newCategory[key] = value
            }
        })
        existingContentCategory = await ContentCategory.findByIdAndUpdate({ _id: req.params.id }, { $set: newCategory }, { new: true })
        res.json(existingContentCategory)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al editar la categoria')
    }
}

export const deleteContentCategory = async (req, res) => {
    try {
        const contentCategory = await ContentCategory.findById(req.params.id)

        if (!contentCategory) {
            return res.status(404).json({ msg: 'Categoria de contenido no encontrada' })
        }
        await ContentCategory.findByIdAndDelete(req.params.id)
        res.json({ msg: 'Se elimino la categoria de manera correcta' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar la categoria')
    }
}

