require().config();

const express = require('express');
const cors = require('cors');
const app = express();
const post = porcess.env.PORT;

var db_modul = require('./module/database');
const { Router } = require('express');
const { createPool } = require('mysql');

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.use('/db', db_module);

app.listen(port, () =>{
    console.log(`Server listening on port ${port}...`);
});


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


