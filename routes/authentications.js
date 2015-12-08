var express = require('express');
var router = express.Router();


/* GET authentication text. */
router.post('/:customerId', function (req, res, next) {
    res.render('index', { message: '5362' });
});

module.exports = router;
