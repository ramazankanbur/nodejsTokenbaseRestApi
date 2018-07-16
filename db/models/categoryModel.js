const mongoose = require('../dbconfig');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Kategori adı zorunlu']
    },
    image: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;
