'use strict'
var _extends = require("../../utils/extends/extends"),
    observable = require("data/observable");

function InfoViewModel() {
    observable.Observable.apply(this, arguments);
}

_extends(InfoViewModel, observable.Observable);

InfoViewModel.prototype.personalInformation = {};
InfoViewModel.prototype.books = [];

module.exports = new InfoViewModel();
