var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", function (error, db) {
    if (error) {
        console.log("baglanti yok");
        throw error;
        

    } else {
        console.log("baglanti saglandi");

        var kitap={
            kitap_adi:"1984",
            basim_yili:"bilinmiyor",
            yazar :"Orwell",
            yayin_evi:"bilinmiyor"
        };

       db.collection("kitap").insertOne(kitap,function(err,result){
           if(err){
            throw err;
               console.log("kaydedilemedi");
              
           }else{
               console.log("kaydetme basarili")
           }
       })
        
    }
})