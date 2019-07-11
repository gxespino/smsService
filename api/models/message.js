'user strict';

var connection = require('./db.js');

var Message = function(message){
  this.to_phone   = message.to;
  this.from_phone = message.from;
  this.body       = message.body;
};

Message.createMessage = function(newMessage, result) {
  connection.query("INSERT INTO text set ?", newMessage, function(err, res) {

    if(err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Message.getAllMessages = function(searchParams, result) {
  var to          = searchParams.to;
  var from        = searchParams.from;
  var maxMessages = parseInt(searchParams.maxMessages);
  var sql         = "SELECT * FROM text WHERE `to_phone` = ? AND `from_phone` = ? LIMIT ?"

  connection.query(sql, [to, from, maxMessages], function(err, res) {

    if(err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= Message;
