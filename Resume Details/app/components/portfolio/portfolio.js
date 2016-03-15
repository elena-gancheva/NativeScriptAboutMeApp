'use strict';
var helpers = require('../../utils/widgets/helper'),
    portfolioViewModel = require('./portfolio-view-model');

function portfolioPageLoaded(args) {
    var page = args.object,
        contactBtn = page.getViewById("contact-btn");
    
    contactBtn.animate({
       scale: { x: 0.8, y: 0.8 },
       duration: 900
    })
    .then(function(){
        return contactBtn.animate({
            scale: { x: 0.5, y: 0.5 },
        	duration: 900
        })
    })
    .then(function(){
        return contactBtn.animate({
            scale: { x: 0.8, y: 0.8 },
        	duration: 900
        })
    })
    .then(function(){
        return contactBtn.animate({
            scale: { x: 0.5, y: 0.5 },
        	duration: 900
        })
    })
    .then(function(){
        return contactBtn.animate({
            scale: { x: 0.8, y: 0.8 },
        	duration: 900
        })
    });
    
    page.bindingContext = portfolioViewModel;
}

exports.portfolioPageLoaded = portfolioPageLoaded;