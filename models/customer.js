var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CustomerSchema   = new Schema({
    name: String,
    email: String,
    accounts: [{
    	id: Number,
    	balance: Number,
    	nickName: String,
    	category: String,
    	isActive: Boolean
    }]
});

module.exports = mongoose.model('Customer', CustomerSchema);