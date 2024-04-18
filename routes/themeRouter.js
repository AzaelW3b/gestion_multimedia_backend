import express from "express"
import { createTheme, getThemes, editTheme, deleteTheme } from "../controllers/themeController.js"
import multer from "multer"

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'portadas/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get('/', getThemes)
router.post('/', upload.single('coverImage'), createTheme)
router.put('/:id', upload.single('coverImage'), editTheme)
router.delete('/:id',  deleteTheme)

export default router