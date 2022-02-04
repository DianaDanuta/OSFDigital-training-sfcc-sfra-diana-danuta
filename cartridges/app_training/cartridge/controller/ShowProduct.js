'use strict';

var server = require('server');

server.extend(module.superModule);

server.get('Product', function(req, res, next) {
    var ProductMgr = req('dw/catalog/ProductMgr')
    var myProduct = ProductMgr.getProduct('25519318M');
    var viewData = res.getViewData();

    viewData.myProduct = myProduct
    res.render('varTest/varTest')
    return next();
});

module.exports = server.exports();