var express = require('express');
var router = express.Router();

var accounts = [
    {
        id: "1",
        type: "Capital 360",
        nickname: "Yazdan360",
        balance: "2360"
    },
    {
        id: "2",
        type: "Credit Card",
        nickname: "Yazdan Credit",
        balance: "540"

    },
    {
        id: "3",
        type: "Bank",
        nickname: "My Bank",
        balance: "23590"

    }
];
/* GET accounts listing. */
router.get('/:customerId/accounts', function (req, res, next) {
    res.json(accounts);
});

module.exports = router;