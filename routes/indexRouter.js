const { Router } = require('express');
const MessageNotFoundError = require('../errors/MessageNotFoundError');

const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

indexRouter.get('/', (req, res) =>
  res.render('index', { title: 'Mini Messageboard', messages: messages })
);

indexRouter.get('/new', (req, res) =>
  res.render('form', { title: 'New Message' })
);

indexRouter.post('/new', (req, res) => {
  const { name, message } = req.body;
  messages.push({
    text: message,
    user: name,
    added: new Date(),
    id: crypto.randomUUID(),
  });
  res.redirect('/');
});

indexRouter.get('/messages/:id', (req, res, next) => {
  const { id } = req.params;
  const message = messages.find((msg) => msg.id === id);
  if (message) {
    res.render('messageDetails', { title: 'Message Details', message });
  } else {
    res.status(404).render('404', { title: 'Message not found' });
  }
});

module.exports = indexRouter;
