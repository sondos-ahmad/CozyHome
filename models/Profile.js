const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    location:{
        type: String
    },
    name:{
        type: String
    },
    phone:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = Profile = mongoose.model('profile' , ProfileSchema);