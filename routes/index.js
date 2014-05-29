var routes = require('../routes');

module.exports.index = function(req, res){
    var data = {
        title: 'Crimson Hexagon Fake API Service',
        routes : routes.routes
    }

    res.render('index', data);
};
