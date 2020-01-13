const db = require('../db/config.js');

module.exports = {
    create: function(req,res) {
        let {name, ip_address} = req.body;
        const sql = `
            INSERT INTO Devices (name,ip_address)
            VALUES (?,?);
        `
        db.run(sql, [name, ip_address], function(err) {
            if (err) {
                return console.log(err.message);
                res.end(err.message);
            }
            res.json({id: this.lastID, name, ip_address});
        });

    },
    findAll: function(req,res) {
        const sql = `
            SELECT id,name,ip_address
            FROM Devices ORDER BY id
        `
        db.all(sql, [], (err, rows) => {
            if (err) {
                return console.log(err.message);
                res.end(err.message);
            }
            res.json(rows);
        });
    },
    update: function(req,res) {
        console.log(req.body);



        const sql = `
        
        `
        res.json({});
    }
};

