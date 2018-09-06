var path = require('path');

module.exports = function(app) {
  app.use('/api/list', require('../api/list'));
  app.use('/api/card', require('../api/card'));

	// manda a angular
  app.all('/*', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });
};
