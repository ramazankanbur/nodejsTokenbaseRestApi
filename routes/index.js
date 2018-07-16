const userRoute = require('./UserRoute');
const wordRoute = require('./WordRoute');
const categoryRoute = require('./CategoryRoute'); 

module.exports = (app, apiUrlPrefix) => {
    app.use(`/${apiUrlPrefix}/user`, userRoute);
    app.use(`/${apiUrlPrefix}/word`, wordRoute);   
    app.use(`/${apiUrlPrefix}/category`, categoryRoute); 
};
