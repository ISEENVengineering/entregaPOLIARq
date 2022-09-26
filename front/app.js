const express = require('express')
const app = express()
const path = require('path');

const PORt = 5000 || process.env.PORT

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'))
})

app.use(express.static(path.join(__dirname + '/public')))

app.listen(PORt, () => console.log(`server on port ${PORt}`))