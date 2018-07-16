const categoryManager = require('../db/dbBusiness/categoryManager');
const CategoryModel = require('../db/models/categoryModel');

const categoryController = {
    addCategory: async (category) => {
        try {
            const categoryModel = new CategoryModel(category);
            const validateResult = categoryModel.validateSync();
            let returnModel = {};
            if (validateResult) {
                returnModel = {
                    success: false,
                    message: validateResult
                };
            } else {
                const addCategoryResult = await categoryManager.addCategory(categoryModel);
                if (addCategoryResult) {
                    returnModel = {
                        success: true,
                        message: `${addCategoryResult.name} kategorisi eklendi`,
                        category: addCategoryResult
                    };
                } else {
                    returnModel = {
                        success: false,
                        message: 'Bir hata oluştu lütfen tekrar deneyin'
                    };
                }
            }
            return returnModel;
        } catch (err) {
            throw err;
        }
    },
    getCategory: async ({ id } = 0) => {
        try {
            const getCategoryResult = await categoryManager.getCategory(id);
            let returnModel = {};
            if (getCategoryResult) {
                returnModel = {
                    success: true,
                    category: getCategoryResult
                };
            } else {
                returnModel = {
                    success: false,
                    message: 'Kategori bulunamadı'
                };
            }
            return returnModel;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = categoryController;
