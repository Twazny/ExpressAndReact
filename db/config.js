const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./db/DATABASE.sqlite',(err) => {
    if (err) {
      console.error(err.message);
    }
    db.run(`
        CREATE TABLE IF NOT EXISTS Devices (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            ip_address TEXT NOT NULL
        );
    `);

    console.log('Database ready!');
});

module.exports=db;