'use strict';

var Message = require('../models/message.js');

exports.create_a_message = function(req, res) {
  var new_message = new Message(req.body);

  console.log(new_message)

  if(!new_message.body || !new_message.from_phone || !new_message.to_phone) {
    res.status(400).send({
      error: true,
      message: 'Something went wrong'
    });
  } else {
    Message.createMessage(new_message, function(err, message) {
      res.json('Sms Message successfully stored');

      if (err) {
        res.send(err);
        res.json('Something went wrong');
      }
    });
  }
};

exports.list_messages = function(req, res) {
  Message.getAllMessages(req.query, function(err, message) {
    res.json(message)

    if (err) {
      res.send(err);
      res.json('Something went wrong');
    }
  });
};

