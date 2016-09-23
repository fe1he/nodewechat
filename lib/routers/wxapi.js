var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser({
        explicitArray: false
    }), function(req, res, next) {
        var data = req.body.xml;
        var content = data.content;

        res.append('Content-Type', 'text/xml');
        res.send(xml({
            xml: [
                {ToUserName: {_cdata: data.fromusername}},
                {FromUserName: {_cdata: data.tousername}},
                {CreateTime: +new Date()},
                {MsgType: {_cdata: 'text'}},
                {Content: {_cdata: 'dashabi'}}
            ]
        }));
    })

    // cheat wechat server
    .get(function(req, res, next) {
        var str = req.query.echostr;
        res.send(str);
    });

module.exports = router
