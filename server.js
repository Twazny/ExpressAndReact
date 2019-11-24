const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const favicon = require('serve-favicon');


let app = express();
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

app.use(favicon(path.join(__dirname, '/client', 'storm.svg')));
app.use(express.static(path.join(__dirname, '/client')));


let db = new sqlite3.Database('./db/DATABASE.sqlite',(err) => {
    if (err) {
      console.error(err.message);
    }

    db.run(`
        CREATE TABLE IF NOT EXISTS Devices (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            ip_address TEXT NOT NULL
        ) WITHOUT ROWID;
    `);

    
    var server = app.listen(PORT,() => {
        console.log(`Server listening onc as port: ${PORT}.`);
    });

});



