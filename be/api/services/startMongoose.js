const mongoose = require('mongoose')

var { userSchema } = require('../users/UserSchema');
const { password, dbname } = require('../secrets/mongooseSecrets'); 

mongoose.connect(`mongodb+srv://taylor:${password}@fashion-blog.l2o79.mongodb.net/${dbname}?retryWrites=true&w=majority`, {useNewUrlParser: true})