const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const importData = require('./data.json');


app.get('/', (req, res) => {
    res.send("heloo")
});

app.get('/players', (req, res) => {
    res.send(importData)
});


app.listen(port, () => console.log(`Server running on ${port}`))
