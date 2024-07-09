import express from 'express'
import postRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({ storage })

app.post('/api/uploads', upload.single("file"), (req, res) => {
    const file = req.file
    res.status(200).json(file.filename)
})


app.use("/api/posts", postRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/auth", authRoutes)


export default app;
