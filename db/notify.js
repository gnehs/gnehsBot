const mongoose = require('mongoose')
const SubscriptionSchema = mongoose.Schema({
    id: String,
    title: String,
}, {
        _id: false
    });
const NotifySchema = new mongoose.Schema({
    id: String,
    name: String,
    subscription: [SubscriptionSchema],
});
const model = mongoose.model('Notify', NotifySchema)

async function subscribe(uId, sId) {

}
async function getSubscription(uId) {

}
async function unsubscribe(uId, sId) {

}
async function getUser(uId) {

}
module.exports = {
    model,
}