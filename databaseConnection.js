const mysql = require('mysql');

const db = mysql.createConnection({

    host:'localhost',
    database:'hostelreservation',
    user:'root',
    password:'root',
    port:'3307',
});


db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Database connected successfully');
    }

    
});


module.exports = db;