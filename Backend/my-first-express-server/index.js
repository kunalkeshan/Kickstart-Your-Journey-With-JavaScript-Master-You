const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    const fileData = fs.readFileSync(path.join(__dirname, 'data.json'));
    const data = JSON.parse(fileData);
    return res.json(data);
})

app.listen(5000, () => {
    console.log('Server running at port 5000');
})