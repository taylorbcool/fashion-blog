const mongoose = require('mongoose')

var { userSchema } = require('../schemas/UserSchema');

mongoose.connect('mongodb://localhost/fashion-blog', {useNewUrlParser: true})