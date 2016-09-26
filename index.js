var app = require('express')(),
    bodyParser = require('body-parser')，
    conf = require('./lib/config'),
    wechat = require('./lib/wechat');

app.use(bodyParser.urlencoded({
    extended: false
}));

wechat(conf.wechat);
wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi',require('./lib/routers/wxapi.js'));

app.listen(8019, function(err) {
    console.log('listening to 8019');
})
