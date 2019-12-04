const { Router } = require('express');
const {create,findAll} = require('../controllers/devices.js');

const devicesRouter = Router();

devicesRouter.post('/',create)
devicesRouter.get('/',findAll);

module.exports=devicesRouter;