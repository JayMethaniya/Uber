const mongoose = require('mongoose');

function connect() {
  return mongoose
    .connect(process.env.DB_CONNECT )
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB Connection Error:', err));
}

module.exports = connect;
