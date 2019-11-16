const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '/client')));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'),() => {
    console.log(`Server listening on port: ${app.get('port')}.`);
})