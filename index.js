require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('hellow kapil')
})
app.get('/amazon', (req, res) => {
    res.send('your order is picked')
})

app.listen(process.env.PORT, () => {
    console.log("congratulationo you made a server")
    console.log(`this is your back-end port name ${port}`)
})
