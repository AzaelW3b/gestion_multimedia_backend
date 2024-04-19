import express from "express"
import dotEnv from "dotenv"
import conectarDB from "./config/bd.js"
import cors from "cors"
import userRouter from "./routes/userRouter.js"
import contentCategoryRouter from "./routes/contentCategoryRouter.js"
import themeRouter from "./routes/themeRouter.js"
import contentRouter from "./routes/contentRouter.js"

const app = express()
app.use(cors())
dotEnv.config()
conectarDB()
app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 5000

app.use('/portadas', express.static('portadas'))
app.use('/api/user', userRouter)
app.use('/api/contentCategory', contentCategoryRouter)
app.use('/api/theme', themeRouter)
app.use('/api/content', contentRouter)
app.listen(PORT, () => console.log(`El servidor se esta ejecutando en el puerto ${PORT}`))