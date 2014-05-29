// Custom router setup for CH
var Routes = function(){}

Routes.prototype.init = function(app){

    var modules = {};

    this.routes.forEach(function(d){
        var method   = d[0],
            endpoint = d[1],
            arr      = endpoint.split('/'),
            module   = arr[1] || 'index',
            func     = arr[2] || 'index';

        // Load module if we haven't already
        if (!modules[module]){
            modules[module] = require('./routes/' + module);
        }

        // Create route
        try {
            app[method](endpoint, modules[module][func]);
        } catch(e){
            throw new Error('Missing a function for endpoint "' + endpoint + '"', e);
        }
    });
}

// Explicitly define routes
Routes.prototype.routes = [

    // method,  endpoint
    [ 'get', '/' ],
    [ 'get', '/users' ],
    [ 'get', '/users/list' ],
    [ 'get', '/monitors' ],
    [ 'get', '/monitors/create' ],
    [ 'get', '/monitors/list' ]
];

module.exports = new Routes();
