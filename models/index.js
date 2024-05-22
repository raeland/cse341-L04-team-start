const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const DB = {}
DB.mongoose = mongoose
DB.url = dbConfig.url
DB.temples = require('./temples.js')(mongoose)

module.exports = DB

