var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .get(function(req, res, next) {
        var str = rea.query.echostr;
        res.send(str);
    });

module.exports = router
