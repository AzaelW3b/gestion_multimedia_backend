import express from "express"
import dotEnv from "dotenv"
import conectarDB from "./config/bd.js"
import cors from "cors"
import userRouter from "./routes/userRouter.js"
import contentCategoryRouter from "./routes/contentCategoryRouter.js"

const app = express()
app.use(cors())
dotEnv.config()
conectarDB()
app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 5000

app.use('/api/user', userRouter)
app.use('/api/contentCategory', contentCategoryRouter)
app.listen(PORT, () => console.log(`El servidor se esta ejecutando en el puerto ${ PORT }`))