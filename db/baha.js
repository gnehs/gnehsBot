const mongoose = require('mongoose')
const BahaSchema = new mongoose.Schema({
    id: String,
    name: String
});
const model = mongoose.model('Baha', BahaSchema)