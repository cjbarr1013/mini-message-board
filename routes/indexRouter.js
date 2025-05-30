const { Router } = require('express');
const MessageNotFoundError = require('../errors/MessageNotFoundError');
const indexController = require('../controllers/indexController');
const indexRouter = Router();

indexRouter.get('/', indexController.indexGet);

indexRouter.get('/new', indexController.newGet);

indexRouter.post('/new', indexController.newPost);

indexRouter.get('/messages/:id', indexController.messageGet);

module.exports = indexRouter;
