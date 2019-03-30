var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();
var hhhhhh = require('./api/hhhhhh.js');

router.get('/', (ctx, next) => {
    // ctx.router available
    ctx.set('Access-Control-Allow-Origin','http://localhost:8888');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.body = 'Hello World 666';
});
router.get('/hh', hhhhhh);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3008, () => {
    console.log('listen 3008')
});