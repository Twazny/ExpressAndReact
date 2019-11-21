const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');


let app = express();
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

app.use(express.static(path.join(__dirname, '/client')));

let database = new sqlite3.Database('./db/DATABASE.sqlite',(err) => {
    if (err) {
      console.error(err.message);
    }

    
    var server = app.listen(PORT,() => {
        console.log(`Server listening onc as port: ${PORT}.`);
    });

});



