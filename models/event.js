const mongoose = require('mongoose');

const Event = mongoose.model('Event', {
    name:{
        type: String
    },
    type:{
        type: String
    },
    ClubInvolved:{
        type: String
    },
    
})

module.exports = Event;