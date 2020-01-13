const { Router } = require('express');
const {create,findAll,update} = require('../controllers/devices.js');

const devicesRouter = Router();

devicesRouter.get('/',findAll);
devicesRouter.post('/',create);
devicesRouter.patch('/:id',update);


module.exports=devicesRouter;