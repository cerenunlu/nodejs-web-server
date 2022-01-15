var mysql = require("mysql");

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123.Root",
    database:"nodejs"
});

connection.connect(function(err){
if(err) throw err;

console.log("baglanti basarili.....");
var sql ="INSERT INTO personel (id,ad,soyad,email) VALUES ('2','Yusuf','Bilge','yusuf@gmail.com')";
connection.query(sql, function(err,result){
    if(err) throw err;
    console.log("kayit eklendi....");
})
})