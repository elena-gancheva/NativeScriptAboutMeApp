var helper = require('../../utils/widgets/helper'),
    Observable = require('data/observable').Observable;

PortfolioViewModel = new Observable({

    contactUrl: 'https://bg.linkedin.com/in/elena-gancheva-0448b6117',
    
    onContactTap: function() {
        helper.onOpenUrl(this.contactUrl);
    }
});

module.exports = PortfolioViewModel;