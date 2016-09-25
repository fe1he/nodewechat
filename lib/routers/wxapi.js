var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser({
        explicitArray: false
    }), function(req, res, next) {
        var data = req.body.xml;
        var content = data.content;
        var msgType = data.msgtype;

        if (msgType = 'text') {
            returnMsg = textReturn(content);
        } if (msgType = 'image') {
            returnMsg = imageReturn(content);
        } if (msgType = 'voice') {
            returnMsg = voiceReturn(content);
        }

        console.log(returnMsg);

        res.append('Content-Type', 'text/xml');
        res.send(xml({
            xml: [
                {ToUserName: {_cdata: data.fromusername}},
                {FromUserName: {_cdata: data.tousername}},
                {CreateTime: +new Date()},
                {MsgType: {_cdata: 'text'}},
                {Content: {_cdata: returnMsg}}
            ]
        }));
    })

    // cheat wechat server
    .get(function(req, res, next) {
        var str = req.query.echostr;
        res.send(str);
    });

// receive text message and return text
var textReturn = function(content) {
    switch (content) {
        case '1':
            content = '你拍一，我拍一\n李涵是个大傻逼';
            break;
        case '2':
            content = '你拍二，我拍二\n李涵就是有点二';
            break;
        case '3':
            content = '你拍三，我拍三\n李涵脑袋有点宽';
            break;
        case '4':
            content = '你拍四，我拍四\n';
            break;
        case '5':
            content = '';
            break;
        case '6':
            content = '';
            break;
        case '7':
            content = '';
            break;
        case '8':
            content = '';
            break;
        case '9':
            content = '';
            break;

        default:
            content = 'hhhh';
            break;

    }
    return content;

}

var imageReturn = function(content) {
    content = '不要发小黄图了';
    return content;
}

var voiceReturn = function(content) {
    content = '说点好听的';
    return content;
}

module.exports = router
