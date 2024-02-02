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


////      ////
//   CRUD   //
////      ////



// CREATE
    // add user
    router.post(':/employees', (req, res)=>{
        pool.query(`INSERT INTO employees ID, name, address, position, pricePerHour VALUES (colum)`,(err, results)=>{
            sendResults(table, err, results, req, res);
        });
    
    })
    
    
    
    // add WORKTIME
    router.post(':/worktimes', (req, res)=>{
        pool.query(`INSERT INTO worktimes ID, empID, date, position, start, end   VALUES (colum)`,(err, results)=>{
            sendResults(table, err, results, req, res);
        });
    
    })
    
    // READ
    
        // GET all employees
    router.get(':employees',(req, res) => {
        let table = req.params.table;
        createPool.query(`SELECT * FROM employees`, err, results=>{
            sendResults(table, err, results, req, res);
        });
    });
    
    // GET all worktimes
    router.get(':worktimes',(req, res) => {
        let table = req.params.table;
        createPool.query(`SELECT * FROM worktimes`, err, results=>{
            sendResults(table, err, results, req, res);
        });
    });
    
    
    
    
    
    
    // UPDATE
    // update employees
    router.patch(`UPDATE employees set`,(req, res)=>{
    
    });
    
    // DELETE
    
    
    