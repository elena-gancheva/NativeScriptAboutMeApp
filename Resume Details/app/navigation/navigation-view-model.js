'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', false);

module.exports = navigationViewModel;