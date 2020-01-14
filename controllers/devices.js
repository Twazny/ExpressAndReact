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
                console.log(err.message);
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
                console.log(err.message);
                res.end(err.message);
            }
            res.json(rows);
        });
    },
    update: function(req,res) {
        console.log(req.body);
        const id = parseInt(req.params.id);

        let sql = `
        UPDATE Devices SET
        `
        let updateColums = [];
        let queryValues = Object.keys(req.body).push(id);
        Object.keys(req.body).forEach((key) => {
            updateColums.push(`${key} = ?`);
        });
        sql = sql.concat(updateColums.join(', '), ` WHERE id = ?`);

        console.log(sql);
        db.run(sql, queryValues, function(err) {
            if (err) {
                console.log(err.message);
                res.end(err.message);
            }
            res.json({id, ...req.body});
        });
    }
};

