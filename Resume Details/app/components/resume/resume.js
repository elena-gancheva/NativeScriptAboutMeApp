'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    frameModule = require("ui/frame"),
    viewModel = require('./resume-view-model');

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    
    if (isInit) {
        isInit = false;
    }
}

function goToPersonalInformation() {
    frameModule.topmost().navigate("components/info/info");
}

function goToPortfolioView() {
    frameModule.topmost().navigate("components/portfolio/portfolio");
}

exports.pageLoaded = pageLoaded;
exports.goToPersonalInformation = goToPersonalInformation;
exports.goToPortfolioView = goToPortfolioView;