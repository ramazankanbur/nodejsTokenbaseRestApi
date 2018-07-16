const routeMiddleware = {
    tokenfilter: (router) => { 
        router.use((req, res, next) => {
            const token = req.body.token || req.params['token'] || req.headers['x-access-token'];
            if (token) {
                if (token) { //verify token
                    next();
                } else {
                    return res.status(401).json({ success: false, message: 'Unauthorized' });
                }
            } else {
                return res.status(401).send({ success: false, message: 'Unauthorized' });
            }
        });
    }
};

module.exports = routeMiddleware;
