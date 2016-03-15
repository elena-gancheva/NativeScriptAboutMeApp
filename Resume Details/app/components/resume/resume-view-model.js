'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    backButtonHidden: false,

    pageTitle: 'About me',
});

module.exports = ViewModel;