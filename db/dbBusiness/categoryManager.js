const categoryModel = require('../models/categoryModel');

const categoryDbManager = {
    addCategory: async (category) => {
        try {
            const addCategoryResult = await categoryModel.create(category);          
            return addCategoryResult;
        } catch (err) {
            throw err;
        }
    },
    getCategory: async (id = 0) => {
        try {
            let returnResult = {};
            if (id !== 0) {
                const categoryResult = await categoryModel.findById(id);  
                returnResult = categoryResult;
            } else {
                const categoryResult = await categoryModel.find();
                returnResult = categoryResult;
            }
            return returnResult;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = categoryDbManager;
