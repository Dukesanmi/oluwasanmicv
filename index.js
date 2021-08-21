//ik,8*KI><
const log = console.log;

//EXPRESS
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Message = require('./models/Form');


const dbConnect = require('./database/config');
dbConnect();

app.use(express.static('public'));
app.use(express.json());

//set the view engiene to ejs 
app.set('view engine', 'ejs');
//Bodyparser
app.use(bodyParser.urlencoded({ extended: false }))

//routes
app.get('/', (req, res)=> {res.render('about')});

app.get('/about_me', (req, res)=> {res.render('about')});

app.get('/skills', (req, res)=> {res.render('skills')});

app.get('/experience', (req, res)=> {res.render('experience')});

app.get('/education', (req, res)=> {res.render('education')});

app.get('/ask_me', (req, res)=> {res.render('form')});

app.post('/form', (req, res)=> {
	Message.create({...req.body}, (err, received)=> {
		log({...req.body})
		if(err) return res.status(500).json({err: 'server error'});
		return res.status(200).render('sent');
	});
});

app.listen(port, ()=> {
	log(`@ port ${port}`);
});