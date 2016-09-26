module.exports = function(data) {

    var event = data.event;
    var eventKey = data.eventkey;

    var reContent;
    switch (event.toLowerCase()) {
        case 'click':
            switch (eventKey) {
                case 'menu1':
                    reContent = 'menu1 clicked';
                    break;
                case 'menu2':
                    reContent = 'menu2 clicked';
                    break;
                default:
                    reContent = '...';
                    break;
            }

            break;

            case 'view':
                reContent = 'view view';
                break;

            case 'scancode_push':
                // reContent = data.scancodeinfo;
                return JSON.stringify(data);
                // return codeInfo;
                // reContent = 'scan succeed';
                break;

        default:
            reContent = event;
            break;
    }
    return reContent;
}
