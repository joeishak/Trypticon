
/**Node Packages and Global Object - Declaration / Instantiation */
let express = require('express');
let router = express.Router();
let _ = require('lodash');



exports.postStreetView = (req, res, next) => {
    console.log('PArams:',req.params);
   console.log(`https://www.google.com/maps/embed/v1/streetview?key=AIzaSyB6Nu87bDAqPfkNxBPC9Dfwekjh3BEDXGU
    &location=${parseFloat(req.params.param2)},${parseFloat(req.params.param1)}&heading=210&pitch=10&fov=35`)
    res.send(`<iframe
    width=600"
    height="450"
    frameborder="0" style="border:0"
    src='https://www.google.com/maps/embed/v1/streetview?key=AIzaSyB6Nu87bDAqPfkNxBPC9Dfwekjh3BEDXGU
    &location=${(req.params.param1)},${(req.params.param2)}&heading=210&pitch=10&fov=35' allowfullscreen>
  </iframe> 
  `)
}

