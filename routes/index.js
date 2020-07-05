var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var fruits = [
        { name: 'Apple', color: 'red' },
        { name: 'Watermellon', color: 'green' },
        { name: 'Banana', color: 'yellow' }
    ];
    var tagline = "Just a test string";

	res.render('pages/index', 
		{fruits: fruits, tagline: tagline});
});

module.exports = router;
