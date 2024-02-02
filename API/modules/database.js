const router = require('express').Router();
var mysql = require('mysql');
var { sendResults, getOperator, tokenChek} = require('./functions');

var pool = mysql.createPool({
    connectTimeout : 10,
    host: process.env.DBOST,
    user: process.env.DBUSER,
    pasword: process.env.DBPASS,
    database: process.env.DBNAME,
    timezone: 'UTC'
})

// ENDPOINTS

// get all records

router.get()