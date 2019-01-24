
const maps = require('./controllers/maps.js');

module.exports = function (app) {
       app.get('/streetview/:param1/:param2', maps.postStreetView);
}
