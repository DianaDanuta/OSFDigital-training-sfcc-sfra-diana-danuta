'use strict';

var server = require('server');

server.extend(module.superModule);

server.get('', function(req, res, next) {
    var testRender = res.getViewData();
    viewData.example = "One string"
    res.setViewData(testRendera);
    res.render('training/callController', { testRender: testRender });
    return next();
});

module.exports = server.exports();