module.exports = queryWordList;
const { findEnglishData } = require('../mysql.js');

async function queryWordList (ctx) {
    // ctx.set('Access-Control-Allow-Origin','http://localhost:8888');
    // ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    // ctx.set('Access-Control-Allow-Credentials', true);
    const rows = await findEnglishData().then((data) => {
        return data;
    }).catch((error) => {
        console.error(error)
    });

    console.log(666, rows);

    console.log('aaa');
    ctx.body = {
        code: 200,
        success: true,
        message: '',
        data: rows
    }
}
