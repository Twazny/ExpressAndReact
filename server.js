const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const db = require('./db/config.js');

const deviceRouter = require('./routes/devices');


const app = express();
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

app.use(favicon(path.join(__dirname, '/client', 'storm.svg')));
app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.json());
app.use((req,res,next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
})

app.use('/api/devices/', deviceRouter);

app.get('/*', (req,res)=>{res.redirect('/')});

var server = app.listen(PORT,() => {
    console.log(`Server listening on port: ${PORT}.`);
});

//curl -i -H "Content-Type: application/json" -X POST -d "{\"name\":\"Raspberry 3B+\",\"ip_address\":\"192.168.0.5\"}" http://localhost:4000/api/devices
//curl -i -H "Content-Type: application/json" -X POST -d "{\"name\":\"Arduino UNO\",\"ip_address\":\"192.168.0.7\"}" http://localhost:4000/api/devices