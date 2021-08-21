//ik,8*KI><
const log = console.log;
const mongoose = require('mongoose');
const connectionString = process.env.DB_URI || 'mongodb://localhost/';

module.exports = function() {
	mongoose.connect(connectionString, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false
	}, (err)=> {
		if (err) throw err;
		log('Database connected');
	});
}
