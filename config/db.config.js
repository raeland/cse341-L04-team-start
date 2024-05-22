const dotenv = require('dotenv');
dotenv.config()
const MongoClient = require('mongodb').MongoClient

module.exports = {
  url: process.env.MONGODB_URI,
}

let DB

const initDb = (callback) => {
    if (DB) {
        console.log('Db is already initialized!')
        return callback(null, DB)
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
          DB = client;
            callback(null, DB)
        })
        .catch((err) => {
            callback(err)
        })
        return initDb
}