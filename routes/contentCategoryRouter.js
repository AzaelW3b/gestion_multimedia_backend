import express from "express"
import { createContentCategory, deleteContentCategory, editCotentCategory, getContentCategorys } from "../controllers/contentCategoryController.js"

const router = express.Router()

router.get('/', getContentCategorys)
router.post('/', createContentCategory)
router.put('/:id', editCotentCategory)
router.delete('/:id', deleteContentCategory)

export default router