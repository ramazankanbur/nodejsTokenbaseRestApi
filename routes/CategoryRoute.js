const express = require('express');
const categoryController = require('../controllers/CategoryController');
const routeMiddleware = require('../util/routeMiddleware');
const logger = require('morgan');

const router = express.Router();


routeMiddleware.tokenfilter(router);
 
router.post('/addCategory', async (req, res) => {
    try {
        const addCategoryResult = await categoryController.addCategory(req.body);
        if (addCategoryResult.success) {
            res.status(201).json(addCategoryResult);
        } else {
            res.json(addCategoryResult);
        }
    } catch (err) {
        logger(err);
        res.json(err);
        //res.json({ message: 'Bir hata oluştu lütfen tekrar deneyin' });
    }
});

router.get('/categories', async (req, res) => {
    try {     
        const getCategoryResult = await categoryController.getCategory(req.query);
        if (getCategoryResult.success) {
            res.json(getCategoryResult);
        } else {           
            res.json(getCategoryResult);
        }
    } catch (err) {
        logger(err);
        res.json(err);
        //res.json({ message: 'Bir hata oluştu lütfen tekrar deneyin' });
    }
});

module.exports = router;
