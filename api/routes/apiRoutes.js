'use strict';

module.exports = function(app) {
  var messageHandler = require('../controllers/messagesController');

  app.route('/messages')
    .get(messageHandler.list_messages)
    .post(messageHandler.create_a_message)
};
