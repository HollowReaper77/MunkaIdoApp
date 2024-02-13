require('dotenv').config();
const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const exp = require('constants');

const app = express();
const port = process.env.PORT;

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DBHOST,
    user            : process.env.DBUSER,
    password        : process.env.DBPASS,
    database        : process.env.DBNAME
  });

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// employeess

// get all employees
app.get('/employees', function (req, res) {
    pool.query('SELECT * FROM employees', function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// get one employee
app.get('/employees/:id', function (req, res) {
    let id = req.params.id;
    pool.query('SELECT * FROM employees WHERE ID=?', id, function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// post new employee
app.post('/employees', function (req, res) {
    
    let values = '"'+ Object.values(req.body).join('","') +'"';
    let fields = Object.keys(req.body).join(',');

    pool.query(`INSERT INTO employees (${fields}) VALUES(${values})`, function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// patch employee
app.patch('/employees/:id', function (req, res) {
    let id = req.params.id;
    let values = Object.values(req.body);
    let fields = Object.keys(req.body);

    let sql = '';
    for(i=0; i< values.length; i++){
        sql += fields[i] + `='` + values[i] + `'`;
        if (i< values.length-1) {
        sql += ',';
        } 
    }
    pool.query(`UPDATE employees SET ${sql} WHERE ID='${id}'`, function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// delete employee
app.delete('/employees/:id', function (req, res) {
    let id = req.params.id;
    pool.query('DELETE FROM employees WHERE ID=?', id, function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});


// worktimes

// employeess

// get all worktimes
app.get('/worktimes', function (req, res) {
    pool.query('SELECT * FROM worktimes', function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// get one worktime
app.get('/worktimes/:id', function (req, res) {
    let id = req.params.id;
    pool.query('SELECT * FROM worktimes WHERE ID=?', id, function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// post new worktimes
app.post('/worktimes/:id', function (req, res) {
    let id = req.params.id;

    let values = '"'+ Object.values(req.body).join('","') +'"';
    let fields = Object.keys(req.body).join(',');

    pool.query(`INSERT INTO worktimes (${fields}) VALUES(${values})`, function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// patch worktimes
app.patch('/worktimes/:id', function (req, res) {
    let id = req.params.id;
    let values = Object.values(req.body);
    let fields = Object.keys(req.body);

    let sql = '';
    for(i=0; i< values.length; i++){
        sql += fields[i] + `='` + values[i] + `'`;
        if (i< values.length-1) {
        sql += ',';
        } 
    }
    pool.query(`UPDATE worktimes SET ${sql} WHERE ID='${id}'`, function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// delete worktimes
app.delete('/worktimes/:id', function (req, res) {
    let id = req.params.id;
    pool.query('DELETE FROM worktimes WHERE ID=?', id, function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});

// lehet, hogy pricePerHour-t hozzá kellene adni virtuális táblához
// get all statistics
app.get('/worktimes_vt', function (req, res) {
    pool.query('SELECT * FROM worktimes_vt', function (error, results) {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(results);
        }    
      });
});


app.listen(port, ()=>{
    console.log(`Server listening on port ${port}...`);
})