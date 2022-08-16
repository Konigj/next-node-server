const express = require('express')

const app = express()

app.get('/api/register', (req, res)=> {
    res.json({
        data: "you hit register endpoint"
    })
} )

const port = process.env.PORT || 5000;

app.listen(port , ()=> console.log(`API is running on the port ${port}`))