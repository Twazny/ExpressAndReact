const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '/client')));

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

var server = app.listen(PORT,() => {
    console.log(`Server listening onc as port: ${PORT}.`);
});