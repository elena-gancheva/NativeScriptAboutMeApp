var InfoService,
    http = require("http"),
    config = require("./../shared/config");

function InfoService() { }

InfoService.prototype.getPersonalInformation = function(data) {
    var reqUrl = config.requestUrl;
    
    return http.getJSON( reqUrl )
    	.then(function(result) {
        	return {
                totalBooksCount: result.totalItems,
                books: result.items
            };
    	});
};

module.exports = new InfoService();