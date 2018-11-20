const express = require('express');
const app = express();

app.get('/:num', (req, res) => {
    res.send('Hello ' + req.params.num + ' !')
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log('Running on Port 8080 sucka'));