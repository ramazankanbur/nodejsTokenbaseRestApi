const userModel = require('../models/userModel');

const userDbManeger = {
    registerUser: async (user) => {
        try {
            const addUserResult = await userModel.create(user);
            return addUserResult;
        } catch (err) {
            throw err;
        }
    },
    getUserByEmail: async (email) => {
        try {
            const user = await userModel.findOne({ email });
            return user;
        } catch (err) {
            throw err;
        }
    },
    getUsers: async (id = 0) => {
        try {
            let returnResult = {};
            if (id !== 0) {               
                const userResult = await userModel.findById(id); 
                returnResult = userResult;
            } else {
                const userResult = await userModel.find(); 
                returnResult = userResult;
            }            
            return returnResult;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = userDbManeger;
