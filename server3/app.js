const express = require('express');
const { env } = require('process');
const app = express()
const PORT = 3003 || process.env.PORT

app.listen(PORT, () => console.log(`ejecutandose puerto ${PORT}`))