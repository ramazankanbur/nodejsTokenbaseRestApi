const mongoose = require('mongoose');
const coreConfig = require('../util/config');


mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(coreConfig.coreConfig.mongoDb, { keepAlive: true }, (err) => {
        if (err) console.error(`database bağlantısı esnasında hata oluştu ${err.message}`);
    }).then(() => {
        console.log(`${coreConfig.coreConfig.mongoDb} adresine mongoDb bağlantısı başarılı`);
    });
}


module.exports = mongoose;
