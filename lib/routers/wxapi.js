var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser'),
    parser = require('../parsers');

router.route('/')
    .post(xmlBodyParser({
        explicitArray: false
    }), function(req, res, next) {
        var data = req.body.xml;
        var reContent = parser(data);
        console.log(reContent);

        // var msgType = data.msgtype;
        //
        // switch(msgType) {
        //     case 'text':
        //         returnMsg = textReturn(content);
        //         break;
        //     case 'image':
        //         returnMsg = imageReturn(content);
        //         break;
        //     case 'voice':
        //         returnMsg = voiceReturn(content);
        //         break;
        //
        //     default:
        //         content = 'invalid input type';
        //         break;
        // }

        // if (msgType == 'text') {
        //     returnMsg = textReturn(content);
        // } else if (msgType == 'image') {
        //     returnMsg = imageReturn(content);
        // } else if (msgType == 'voice') {
        //     returnMsg = voiceReturn(content);
        // }

        // console.log(returnMsg);

        res.append('Content-Type', 'text/xml');
        res.send(xml({
            xml: [
                {ToUserName: {_cdata: data.fromusername}},
                {FromUserName: {_cdata: data.tousername}},
                {CreateTime: +new Date()},
                {MsgType: {_cdata: 'text'}},
                {Content: {_cdata: reContent}}
                // {Content: {_cdata: content}}
            ]
        }));
    })

    // cheat wechat server
    .get(function(req, res, next) {
        var str = req.query.echostr;
        res.send(str);
    });

// receive text message and return text
// var textReturn = function(content) {
//     switch (content) {
//         case '1':
//             content = '你打 1 干啥';
//             break;
//         case '2':
//             content = '谁让你打 2 的';
//             break;
//         case '3':
//             content = '你打 3 你家里人知道么';
//             break;
//         case '4':
//             content = '咋又变成 4 了';
//             break;
//         case '5':
//             content = '你打 5 是要上天么';
//             break;
//         case '6':
//             content = '6 个锤子啊';
//             break;
//         case '7':
//             content = '这会儿又变成 7 了';
//             break;
//         case '8':
//             content = '打 8 就牛啊';
//             break;
//         case '9':
//             content = '可算打到 9 了';
//             break;
//
//         default:
//             content = '回复 1～9 获取相关信息';
//             break;
//
//     }
//     return content;
// }
//
// var imageReturn = function(content) {
//     content = '不要发小黄图了';
//     return content;
// }
//
// var voiceReturn = function(content) {
//     content = '说点好听的';
//     return content;
// }

module.exports = router
