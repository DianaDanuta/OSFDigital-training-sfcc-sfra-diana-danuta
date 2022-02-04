"use strict";

var server = require("server");

server.extend(module.superModule);

server.append("test", function(req, res, next) {
    var viewData = res.getViewData();
    viewData.example = "One string";
    res.setViewData(viewData);
    res.render('varTest/varTest');
    return next();
});

module.exports = server.exports();