import express from 'express'
import mongoose from 'mongoose'

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
   res.send("hello world!")
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})