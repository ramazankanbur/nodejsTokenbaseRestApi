const projectConfig = {
    coreConfig: {
        mongoDb: 'mongodb://localhost:27017/sozlukDb',
        mongoDbTest: 'mongodb://localhost:27017/sozlukDb_test',
        secretKey: 'meanstackapplication',
        port: process.env.PORT || 3050,
        apiUrlPrifix: 'drapi',
        saltRound: 10
    }
};

module.exports = projectConfig;
