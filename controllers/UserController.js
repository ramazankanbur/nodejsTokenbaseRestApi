const userManager = require('../db/dbBusiness/userManeger');
const UserModel = require('../db/models/userModel');
const bcrypt = require('bcrypt');
const config = require('../util/config');

const userController = {
    register: async user => {
        try {
            const userModel = new UserModel(user);
            const validateResult = userModel.validateSync();
            let returnModel = {};
            if (validateResult) {
                returnModel = {
                    success: false,
                    message: validateResult
                };
            } else {
                const hashedPassword = await bcrypt.hash(
                    userModel.password,
                    config.coreConfig.saltRound
                );
                userModel.password = hashedPassword;
                const userCreateResult = await userManager.registerUser(userModel);

                if (userCreateResult) {
                    returnModel = {
                        success: true,
                        message: `${userCreateResult.name} kullanıcısı eklendi`,
                        user: userCreateResult
                    };
                } else {
                    returnModel = {
                        success: false,
                        message: 'Bir hata oluştu tekrar, lütfen tekrar deneyiniz'
                    };
                }
            }
            return returnModel;
        } catch (err) {
            throw err;
        }
    },
    login: async ({ email, password }) => {
        try {
            let returnResult = {};
            const userResult = await userManager.getUserByEmail(email);
            if (userResult) {
                const result = await bcrypt.compare(password, userResult.password);
                if (result) {
                    returnResult = {
                        success: true,
                        user: userResult
                    };
                } else {
                    returnResult = {
                        success: false,
                        message: 'Email ya da şifre hatalı'
                    };
                }
            } else {
                returnResult = {
                    success: false,
                    message: 'Kullanıcı kayıtlı değil'
                };
            }
            return returnResult;
        } catch (err) {
            throw err;
        }
    },
    getUsers: async ({ id } = 0) => {
        try {           
            const gettingUserResult = await userManager.getUsers(id);
           
            let returnModel = {};
            if (gettingUserResult) {
                returnModel = {
                    success: true,
                    users: gettingUserResult
                };
            } else {
                returnModel = {
                    success: false,
                    message: 'Kullanıcı bulunamadı'
                };
            }
            return returnModel;
        } catch (error) {
            //handle error log and return message
            throw error;
        }
    }
};

module.exports = userController;
