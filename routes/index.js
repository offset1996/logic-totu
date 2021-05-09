const e = require('express');
const express = require('express');
const router = express.Router();

const Companies = require('../mocks/companies.json');
const Criterion = require('../mocks/criterions.json');

const arr1 = [
    {
        _id:1,
        value: "name",
        inArr: [
            {
                _id: 1,
                condition: "event1",
                inVal: true,
            },
            {
                _id: 2,
                condition: "event2",
                inVal: false,
            },
        ]
    },
    {
        _id:2,
        value: "age",
        inArr: [
            {
                _id: 1,
                condition: 'event3',
                inVal: 1,
            },
            {
                _id: 2,
                condition: 'event4',
                inVal: 2,
            },
        ]
    }
]

const arr2 = [
    {
        _id:1,
        value: "name",
        inArr: [
            {
                _id: 1,
                condition: "event1",
                inVal: 1,
            },
            {
                _id: 2,
                condition: "event2",
                inVal: 2,
            },
        ]
    },
    {
        _id:2,
        value: "age",
        inArr: [
            {
                _id: 1,
                condition: "event3",
                inVal: 1,
            },
            {
                _id: 2,
                condition: "event4",
                inVal: 2,
            },
        ]
    }
]


router.get('/', function(req, res) {

    arr1.forEach((criterion) => {
        arr2.forEach((company) => {
            if(criterion.value === company.value) {
                criterion.inArr.forEach((cat) => {
                    company.inArr.forEach((comat) => {
                        if(cat.condition === comat.condition) {
                            // console.log('condition :' + cat.condition);
                            res.json(cat.condition);
                        }
                    });
                });
            }
        });
    });
    // res.json(arr1);
});

module.exports = router;