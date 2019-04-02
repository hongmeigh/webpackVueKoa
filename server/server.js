var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
const userModel = require('./mysql.js');
var router = new Router();
var hhhhhh = require('./api/hhhhhh.js');
var addWord = require('./myapis/addWord.js');
var queryWordList = require('./myapis/queryWordList.js');
var modifyWord = require('./myapis/modifyWord.js');
var deleteWord = require('./myapis/deleteWord.js');

var app = new Koa();
app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8888');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Credentials', true);
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});
app.use(bodyParser());
router.get('/', (ctx, next) => {
    // ctx.router available
    // ctx.set('Access-Control-Allow-Origin','http://localhost:8888');
    // ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    // ctx.set('Access-Control-Allow-Credentials', true);
    ctx.body = 'Hello World 666';
});
router.get('/hh', hhhhhh);
router.get('/query/list', queryWordList);
router.post('/add', addWord);
router.post('/modify', modifyWord);
router.post('/delete', deleteWord);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3008, () => {
    console.log('listen 3008')
});