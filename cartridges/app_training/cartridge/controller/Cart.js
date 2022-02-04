'use strict';

var server = require('server');

server.extend(module.superModule);

server.append('Show', function(req, res, next) {
    var viewData = res.getViewData();
    viewData.example = "One string"
    res.setViewData(viewData);
    res.render('cart/cart', { Show: Show });
    return next();
});

module.exports = server.exports();