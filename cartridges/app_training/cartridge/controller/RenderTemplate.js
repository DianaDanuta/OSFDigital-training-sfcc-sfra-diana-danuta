'use strict';

var server = require('server');

server.extend(module.superModule);

server.append('Render', function(req, res, next) {
    var viewData = res.getViewData();
    viewData.example = "Some messages"
    res.setViewData(viewData);
    res.render('training/render', { viewData: viewData });
    return next();
});

module.exports = server.exports();