const mongoose = require('../dbconfig');

const Schema = mongoose.Schema;

const User_wordSchema = new Schema({ // eslint-disable-line 
    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    word: [{ type: Schema.Types.ObjectId, ref: 'word' }],
    askCount: {
        type: Number,
        default: 0
    },
    trueCount: {
        type: Number,
        default: 0
    },
    isLastResponseTrue: {
        type: Boolean,
        default: false
    }
});

const User_wordModel = mongoose.model('user_word', User_wordSchema);  // eslint-disable-line 

module.exports = User_wordModel; // eslint-disable-line  
