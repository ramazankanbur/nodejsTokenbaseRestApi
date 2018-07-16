const wordModel = require('../models/wordModel');

const wordManager = {
    addWord: async (word) => {
        try {
            const addWordResult = await wordModel.create(word);
            return addWordResult;
        } catch (err) {
            throw err;
        }
    },
    getWord: async (id = 0) => {
        try {
            let returnResult = {};
            if (id !== 0) {
                const wordResult = await wordModel.findById(id);
                returnResult = wordResult;
            } else {
                const wordResult = await wordModel.find();
                returnResult = wordResult;
            }
            return returnResult;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = wordManager;
