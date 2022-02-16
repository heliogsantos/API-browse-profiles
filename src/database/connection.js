const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected'));

module.exports = db;