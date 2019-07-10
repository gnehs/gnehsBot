const config = require("./config.json")
const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb, { useNewUrlParser: true });

module.exports = db
