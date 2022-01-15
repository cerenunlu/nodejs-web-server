var mysql=require('mysql');
var connection=mysql.createConnection({
   host:"127.0.0.1",
   user:"root",
   password:"123.Root",
   database: "nodejs"

});

connection.connect(function(err){
    if(err) throw err;
    console.log("MySql e basarili sekilde baglanildi");

    connection.query("SELECT * from personel",function(err,result){
        if(err) throw err;
       //console.log("Result : " + result);

       result.foreach(function(row){
            console.log(row);
       });
    })
})