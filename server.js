const http = require('http');
const app = require('./app');
const coreConfig = require('./util/config');
require('./db/dbconfig');

const server = http.Server(app);
const io = require('socket.io')(server);

app.io = io;

server.listen(coreConfig.coreConfig.port, () => {
    console.log(`Running on port ${coreConfig.coreConfig.port}`);
});
