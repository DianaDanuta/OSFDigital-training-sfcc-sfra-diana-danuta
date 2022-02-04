"use strict";

var server = require("server");

var CSRFProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
//These imports are needed for you to uset eh CustomObjectMgr and Transaction classes
var CustomObjectMgr = require("dw/object/CustomObjectMgr");
var Transaction = require("dw/system/Transaction");

var id = "newClient";
// <some other code if needed>
// Replace "<ID of your Object>" as for example NewsLetterSubscription or the ID you gave your custom object
var object = CustomObjectMgr.getCustomObject("NeletterSubscription", id);

// If the return from getCustomObject call is not null, then there is already an instance of the object with this ID and we can't use to create our instance
// If the return is null, it means the ID we are trying to use can be used to create our object instance
server.get("Show", consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function(req, res, next) {
    var Resource = require('dw/web/Resource');
    var URLUtils = require('dw/web/URLUtils');

    var profileForm = server.form.getForm('training');
    profileForm.clear();

    res.render("training/form"), {
        title: Resource.msg("training.form.title.submit", "forms", null),
        profileForm: profileForm,
        actionUrl: URLUtils.url("Form-SubmitRegistration").toString()
    }
});