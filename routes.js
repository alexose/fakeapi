// Routes list

var Routes = function(){

}

Routes.prototype.init = function(){
    this.routes.forEach(function(d){

    });
}

// Explicitly define routes
Routes.prototype.routes = [
    [ 'get',    'index',        '/' ],
    [ 'get',    'users',   '/users' ],
    [ 'get', 'monitors', '/monitors'],
]

modules.exports = Routes;
