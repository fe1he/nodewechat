var app = require('express')(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/wxapi',require('./lib/routers/wxapi.js'));

app.listen(8019, function(err) {
    console.log('listening to 8019');
})
