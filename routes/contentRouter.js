import express from "express"
import { createContent, getContent, editContent, deleteContent } from "../controllers/contentController.js"
import multer from "multer"

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'contenidos/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get('/', getContent)
router.post('/', upload.single('urlImage'), createContent)
router.put('/:id', editContent)
router.delete('/:id', deleteContent)

export default router