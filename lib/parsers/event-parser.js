module.exports = function(event, eventKey) {
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
                reContent = 'scan';
                break;

        default:
            reContent = event;
            break;
    }
    return reContent;
}
