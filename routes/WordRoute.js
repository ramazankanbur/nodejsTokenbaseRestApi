const express = require('express');
const routeMiddleware = require('../util/routeMiddleware');
const wordController = require('../controllers/WordController');

const router = express.Router();

routeMiddleware.tokenfilter(router);

router.post('/addWord', async (req, res) => {
    try {
        const addWordResult = await wordController.addWord(req.body);
        if (addWordResult.success) {
            res.status(201).json(addWordResult);
        } else {
            res.json(addWordResult);
        }
    } catch (err) {
        //log error
        res.json(err);
    }
});

router.get('/words', async (req, res) => {
    try {
        const getWordResult = await wordController.getWord(req.query);
        if (getWordResult.success) {
            res.json(getWordResult);
        } else {
            res.json(getWordResult);
        }
    } catch (err) {
        //log error
    }
});

module.exports = router;
