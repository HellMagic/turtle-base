var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//User schema
var UserSchema = new Schema({
    name: {
        type: String
    },
    hashed_password: {
        type: String
    },
    email: {
        type: String
    }
})

mongoose.model('User', UserSchema);