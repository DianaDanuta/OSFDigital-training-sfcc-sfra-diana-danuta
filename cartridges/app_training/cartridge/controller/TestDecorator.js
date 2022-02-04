'use strict';

var server = require('server');

server.extend(module.superModule);

server.append('Decorator', function(req, res, next) {
    var ProductMgr = requiere('dw/catalog/ProductMgr')
    var myProduct = ProductMgr.getProduct('25519318M');
    var viewData = res.getViewData();

    viewData.myProduct = myProduct;
    res.render('training/decorator');
    return next();
});

module.exports = server.exports();