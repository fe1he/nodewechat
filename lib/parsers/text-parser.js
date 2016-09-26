module.exports = function(content) {
    var reContent;

    switch (content) {

        case '1':
            reContent = '111';
            console.log(reContent);
            break;
        case '2':
            reContent = '222';
            break;
        case '3':
            reContent = '333';
            break;
        case '4':
            reContent = '444';
            break;
        case '5':
            reContent = '555';
            break;
        case '6':
            reContent = '666';
            break;
        case '7':
            reContent = '777';
            break;
        case '8':
            reContent = '888';
            break;
        case '9':
            reContent = '999';
            break;

        default:
            reContent = 'xxx';
            break;
    }

    // reContent = JSON.stringify(data);

    return reContent;
}
