const mongoose = require('../dbconfig');

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    tr: {
        type: String,
        required: [true, 'Türkçe alan zorunlu']
    },
    eng: {
        type: String,
        required: [true, 'İngilizce alan zorunlu']
    },
    image: {
        type: String
    },
    statement: {
        type: String
    },
    category: [{ type: Schema.Types.ObjectId, ref: 'category' }]
}, { timestamps: true });

const WordModel = mongoose.model('word', WordSchema);

module.exports = WordModel;
