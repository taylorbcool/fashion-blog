const mongoose = require('mongoose')

var { userSchema } = require('../users/UserSchema');

mongoose.connect('mongodb://localhost/fashion-blog', {useNewUrlParser: true})