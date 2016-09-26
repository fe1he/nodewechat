module.exports = function(data) {

    var msgType = data.msgtype;
    var reContent;

    switch(msgType) {
        case 'text':
            console.log('aaaa');
            reContent = require('./text-parser.js')(data.content);
            break;
        case 'image':
            // return require('./image-parser.js')(data);
            // break;
        case 'voice':
            return require('./voice-parser.js')(data.recognition);
            break;
        case 'event':
            return require('./event-parser.js')(data.event, data.eventkey);
            break;
        case 'location':
            // return require('./location-parser.js')(data);
            // break;
        case 'shortvideo':
            // return require('./shortvideo-parser.js')(data);
            // break;

        default:
            reContent = 'invalid input type';
            break;
    }


    return reContent;
};
