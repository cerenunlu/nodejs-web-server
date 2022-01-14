var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", function (error, db) {
    if (error) {
        throw error;
        console.log("baglanti yok");

    } else {
        console.log("baglanti saglandi");
        db.collection("kitap").find({}).toArray(function(err,result){
            console.log(result);
        })

        db.collection("kitap").deleteOne({kitap_adi : "Cerrah"}, function (err, result) {

            if (err) {
                throw err;
            } else {

                console.log("kayit silinmistir");
                db.collection("kitap").find({}).toArray(function(err,result){
                    console.log(result);
                })
            }

        })
        
    }
})