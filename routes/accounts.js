var express = require('express');
var router = express.Router();

var accounts = {};
/* GET accounts listing. */
router.get('/', function (req, res, next) {
    res.json(accounts);
});

module.exports = router;


/*
function accountCommandsProcessor(intentSlots, response) {
    var url = baseUrl + '/customers/' + customerId + '/' + 'accounts';

    request.get(url)
        .query({ key: API_KEY })
        .end()
        .then(function onResult(res) {
            accountsData = res.body;
            accountCommandsResponse(intentSlots, response);
        });
}*/
