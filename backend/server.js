import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './src/routes/user.route.js'

const dbURL = process.env.DB_URL;


mongoose
    .connect(dbURL)
    .then(() => 
        {console.log("mongodb connected!")}
    ).catch((error) => {
        console.log(error)
    });

const app = express()
const port = 3000

app.get('/', (req, res) => {
   res.json({message: "hello world!"})
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.use('/api/user', userRoutes)