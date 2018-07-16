const bodyParser = require('body-parser');
const logger = require('morgan');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(logger('dev'));
};
