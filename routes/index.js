var express = require('express');
const { connect } = require('mongoose');
const userModel = require('./users')
var router = express.Router();


// const mongoose = connect.mongoose("")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next){
  res.render('notpage')
});
router.get('/services', function(req, res, next){
  res.render('notpage')
});
router.get('/contact', function(req, res, next){
  res.render('notpage')
});


router.post('/', (req,res,next)=>{
  const { fullname, email, mobileno, subject, message } = req.body;
  const userData = new userModel({ fullname, email, mobileno, subject, message });
  let createUser = userModel.create(userData);
  res.render('thanks');
})

module.exports = router;
