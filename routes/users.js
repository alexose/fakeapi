module.exports.index = function(req, res){
    var data = {
        title: 'Express',
        routes : routes.routes
    }

    res.render('index', data);
};

module.exports.list= function(req, res){

    var users = {
        1 : 'test',
        2 : 'test',
        3 : 'test'
    }

    res.send(users);
};
