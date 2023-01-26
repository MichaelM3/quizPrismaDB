import { PrismaClient } from "@prisma/client"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.post("/signup", async (req, res) => {
    const { username, email, age } = req.body
    const user = await prisma.user.create({
        data: {
            username,
            email,
            age
        }
    })
    res.json(user)
})

const server = app.listen(PORT, () => console.log(`Server ready at: http://localhost:${PORT}`))
