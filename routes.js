// Custom router setup for CH.
var Routes = function(){}

Routes.prototype.init = function(app){

    this.routes.forEach(function(d){
        var method   = d[0],
            name     = d[1],
            endpoint = d[2];

        // Create route
        app[method](endpoint, require('./routes/' + name));
    });
}

// Explicitly define routes
Routes.prototype.routes = [
    [ 'get',    'index',        '/' ],
    [ 'get',    'users',   '/users' ],
    [ 'get', 'monitors', '/monitors'],
];

module.exports = new Routes();
