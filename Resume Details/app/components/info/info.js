'use strict'
var infoService = require("../info/info-service"),
    dialogs = require("ui/dialogs"),
    observable = require("data/observable"),
    infoViewModel = require("../info/info-view-model");

function infoPageLoaded(args) {
    var page = args.object;

    page.bindingContext = infoViewModel;	
}

infoService.getPersonalInformation()
        .then(function(result) {
    
            infoViewModel.set("personalInformation", result);
        	infoViewModel.set("books", result.books);
    });   

exports.infoPageLoaded = infoPageLoaded;

