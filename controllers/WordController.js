const wordManager = require('../db/dbBusiness/wordManager');
const WordModel = require('../db/models/wordModel');

const wordController = {
    addWord: async (word) => {
        try {
            const wordModel = new WordModel(word);
            const validateResult = wordModel.validateSync();
            let returnModel = {};
            if (validateResult) {
                returnModel = {
                    succuss: false,
                    message: validateResult
                };
            } else {
                const addWordResult = await wordManager.addWord(wordModel);
                if (addWordResult) {
                    returnModel = {
                        succuss: true,
                        message: `${addWordResult.tr} - ${addWordResult.eng} kelimesi eklendi`,
                        word: addWordResult
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
    getWord: async ({ id } = 0) => {
        try {
            const getWordResult = await wordManager.getWord(id);
            let returnModel = {};
            if (getWordResult) {
                returnModel = {
                    success: true,
                    word: getWordResult
                };
            } else {
                returnModel = {
                    success: false,
                    message: 'Kelime bulunamadı'
                };
            }
            return returnModel;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = wordController;
