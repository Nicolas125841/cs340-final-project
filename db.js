var mysql = require('mysql2');

exports.connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_UNAME,
    password: process.env.DB_PWD,
    database: process.env.DB_DB
});