const express = require('express');
const { env } = require('process');
const app = express()
const PORT = 3001 || process.env.PORT

dataBase = {
    dato1: "hola",
    dato2: "mundo",
    dato3: "poligran"
}

app.get('/', (req, res)=>{
    res.sendFile(dataBase)
})

app.listen(PORT, () => console.log(`ejecutandose puerto ${PORT}`))