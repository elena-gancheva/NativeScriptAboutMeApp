'use strict';
var helpers = require('../../utils/widgets/helper'),
    portfolioViewModel = require('./portfolio-view-model');

function portfolioPageLoaded(args) {
    var page = args.object,
        contactBtn = page.getViewById("contact-btn");
    
    contactBtn.animate({
       scale: { x: 0.8, y: 0.8 },
       duration: 1200,
       iterations: Number.POSITIVE_INFINITY
    })
    .then(function(){
        return contactBtn.animate({
            scale: { x: 0.6, y: 0.6 },
        	duration: 1200,
            iterations: Number.POSITIVE_INFINITY
        })
    });
    
    page.bindingContext = portfolioViewModel;
}

exports.portfolioPageLoaded = portfolioPageLoaded;