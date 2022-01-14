var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/nodeMongoTest", { useNewUrlParser: true });
var db = mongoose.connection;

var User = require("./user");

db.once('open', function () {
    console.log("veritabanina baglanti saglandi!!!");

    // var user_1=new User({
    //     ad : "Ceren",
    //     soyad : "Unlu",
    //     dogum_tarihi : "11.02.1999",
    //     email : "cerennlu01@outlook.com"
    // });

    // user_1.save(function(error){
    //     if(error) throw error;
    //     console.log("kullanici kaydedildi");
    // })
    // var user_2=new User({
    //     ad : "Arda",
    //     soyad : "Unlu",
    //     dogum_tarihi : "11.02.1999",
    //     email : "cerennlu01@outlook.com"
    // });

    // user_2.save(function(error){
    //     if(error) throw error;
    //     console.log("kullanici kaydedildi");
    // })
    // var user_3=new User({
    //     ad : "Nese",
    //     soyad : "Unlu",
    //     dogum_tarihi : "11.02.1999",
    //     email : "cerennlu01@outlook.com"
    // });

    // user_3.save(function(error){
    //     if(error) throw error;
    //     console.log("kullanici kaydedildi");
    // })

    User.find({}, function (error, docs) {
        console.log(docs);
    })

    // User.remove({ ad: "Ceren" }, function (error) {
    //     if (error) {
    //         throw error;
    //     } else {
    //         console.log("kayit silindi");
    //         User.find({}, function (error, docs) {
    //             console.log(docs);
    //         });
    //     }
    // })
    User.update({ _id: "61e141c89f2e6f5834edb574" },
    {
        ad: "Taner",
        soyad: "Unlu",
        dogum_tarihi: "11.02.1999",
        email: "cerennlu01@outlook.com"
    },
     function (error){
      if(error){
          throw error;
      }else{
          console.log("düzenleme basarili");
          User.find({},function(error,docs){
              console.log(docs);
          })
      }
    })



})