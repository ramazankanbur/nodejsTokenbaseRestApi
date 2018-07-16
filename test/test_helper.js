/* eslint-disable */
const mongoose = require('mongoose');
const coreConfig = require('../util/config');


before(done => {
    mongoose.connect(coreConfig.coreConfig.mongoDbTest, (err) => {
        if (err) {
            console.error(`database bağlantısı esnasında hata oluştu ${err.message}`);
        }
    })
        .then(() => {
            console.log(`${coreConfig.coreConfig.mongoDbTest} adresine mongoDb bağlantısı başarılı`);
            done();
        });
});

beforeEach(done => {
    const { users } = mongoose.connection.collections;
    users.drop()
        .then(() => done())
        .catch(() => done());
});
