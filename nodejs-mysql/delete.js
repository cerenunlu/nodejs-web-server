var mysql=require("mysql");
var connection=mysql.createConnection({
    host :"127.0.0.1",
    user : "root",
    password : "123.Root",
    database : "nodejs"
});
connection.connect(function(err){
    if(err) throw err;
    console.log("baglantı saglandı");

    connection.query("DELETE FROM personel WHERE id=1",function(err,result){
      if(err) throw err;
      console.log(result.affectedRows + " adet kayıt basarili sekilde silindi");
    })
})