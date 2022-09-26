const express = require('express');
const { env } = require('process');
const app = express()
const PORT = 3000 || process.env.PORT
const ws = require('ws')



app.listen(PORT, () => console.log(`ejecutandose puerto ${PORT}`))