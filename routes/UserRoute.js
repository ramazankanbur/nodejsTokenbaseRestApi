const express = require('express');
const userController = require('../controllers/UserController');
const routeMiddleware = require('../util/routeMiddleware');

const router = express.Router();

routeMiddleware.tokenfilter(router);


router.post('/register', async (req, res) => {
    try {
        const registerResult = await userController.register(req.body);
        if (registerResult.success) {
            res.status(201)
                .json(registerResult);
        } else {
            res.json(registerResult);
        }
    } catch (err) {
        res.send(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const loginResult = await userController.login(req.body);
        if (loginResult.success) {
            res.status(200)
                .json(loginResult);
        } else {
            res.json(loginResult);
        }
    } catch (err) {
        res.send(err);
    }
});

router.get('/getUsers', async (req, res) => {
    try {          
        const gettingUserResult = await userController.getUsers(req.query);
      
        if (gettingUserResult.success) {
            res.status(200).json(gettingUserResult);
        } else {
            res.json(gettingUserResult);
        }
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
