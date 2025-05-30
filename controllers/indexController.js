const db = require('../db/queries');

async function indexGet(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

async function newGet(req, res) {
  res.render('form', { title: 'New Message' });
}

async function newPost(req, res) {
  const { name, message } = req.body;
  await db.addNewMessage(message, name);
  res.redirect('/');
}

async function messageGet(req, res) {
  const messages = await db.getAllMessages();
  const { id } = req.params;
  const message = messages.find((msg) => msg.id == id);
  if (message) {
    res.render('messageDetails', { title: 'Message Details', message });
  } else {
    res.status(404).render('404', { title: 'Message not found' });
  }
}

module.exports = {
  indexGet,
  newGet,
  newPost,
  messageGet,
};
