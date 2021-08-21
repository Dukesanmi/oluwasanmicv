const mongoose = require('mongoose');
const { isEmail } = require('validator');

const FormSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		validate: [isEmail, 'Please enter a valid email']
	},
	phone: {
		type: String
	},
	textField: {
		type: String,
		required: true
	}
})

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;