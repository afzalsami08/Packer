var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Afzal16183"
});

var db = "SELECT * FROM mydb.customers";

con.connect(function (err) {
   con.query(db,function(er,res,fields) {
    if(er) {
        console.log(er);
    }

    console.log(fields);
   })
})