var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/users')

const userSchema = new mongoose.Schema({
  fullname: {
    type:String
  },
  email :{
    type: String,
    require: true,
    unique:true
  },
  mobileno :{
    type: Number,
    require: true
  },
  message: {
    type: String
  },
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = mongoose.model("User",userSchema);
