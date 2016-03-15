'use strict';
var InfoViewModel, 
    Observable = require('data/observable').Observable;

InfoViewModel = new Observable({
    personalInformation: {},
    
    books: []                                                                               
});

module.exports = InfoViewModel;
