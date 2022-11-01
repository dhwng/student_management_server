const express = require("express");
const { deleteClassController,updateClassController,createClassController,getClassController } = require('../controllers/classController');
const classRouter = express.Router();

classRouter.get('/getClass',getClassController);
classRouter.post('/createClass',createClassController); 
classRouter.delete('/deleteClass',deleteClassController); 
classRouter.put('/updateClass',updateClassController);

module.exports = {
    classRouter,
}