var express = require('express');
var router = express.Router();
var routes = require('../routes');

/* GET home page. */
router.get('/', function(req, res) {

    var data = {
        title: 'Express',
        routes : routes.routes
    }

  res.render('index', data);
});

module.exports = router;
