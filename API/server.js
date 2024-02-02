require().config();

const express = require('express');
const cors = require('cors');
const app = express();
const post = porcess.env.PORT;

var db_modul = require('./module/database');

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.use('/db', db_module);

app.listen(port, () =>{
    console.log(`Server listening on port ${port}...`);
});