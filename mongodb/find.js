var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", function (error, db) {
    if (error) {
        throw error;
        console.log("baglanti yok");

    } else {
        console.log("baglanti saglandi");

        db.collection("kitap").find({basim_yili : "2000"}).toArray(function(err,result){
               console.log(result);
        })
    }
})