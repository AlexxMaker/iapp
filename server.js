// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with client-id
ig.use({
// get access token here: http://instagram.pixelunion.net/
  access_token: '4177353830.1677ed0.aa6fa116c40542ed86e6eed1d176a6c3',
});

// SET THE ROUTES
// ===================================================
// home page route - popular images
app.get('/', function (req, res) {
   ig.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
    res.render('pages/index', { grams: medias });
    });
});

// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');