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


var bills = [
    {
        id: "1",
        payee: "Cable",
        status: "Pending",
        payment_amount: "230",
        payment_date: "12/11/2015"
    },
    {
        id: "2",
        payee: "Verizon",
        status: "Pending",
        payment_amount: "90",
        payment_date: "11/11/2015"

    }
];

/* GET accounts listing. */
router.get('/:customerId/accounts', function (req, res, next) {
    res.json(accounts);
});

/* GET bills listing. */
router.get('/:customerId/bills', function (req, res, next) {
    res.json(bills);
});

module.exports = router;