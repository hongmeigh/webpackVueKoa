const P = require('./public');
module.exports = hhhhhh;

// 用户激活
async function hhhhhh (ctx) {
    const connection = await P.mysql.createConnection(P.config.mysqlDB)
    await connection.connect();
    const rows = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user_info', function (error, results, fields) {
            if (error) throw error;
            //console.log(results)
            resolve(results)
        });
    }).then((results) => {return results}).catch((error) => {console.log(error)});
    console.log(rows)
    /*if (rows.length) {
        if (rows[0].pass_word.replace(/\//g, '') !== data.code) {
            code = 'errCode'
        } else {
            const [list] = await connection.execute('UPDATE `user` SET `user_type`=? where `id`=?', [4, rows[0].id])
            code = list.affectedRows === 1 ? 'success' : 'failed'
        }
    } else {
        code = 'nobody'
    }*/
    await connection.end();
    ctx.set('Access-Control-Allow-Origin','http://localhost:8888');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Allow-Credentials', true);
    //console.log('aaa')
    ctx.body = {
        code: 200,
        success: true,
        message: '',
        data: rows
    }
}
