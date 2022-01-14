var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", function (error, db) {
    if (error) {
        throw error;
        console.log("baglanti yok");

    } else {
        console.log("baglanti saglandi");

        db.collection("kitap").findOne({kitap_adi : "1984"},function(err,row){
            console.log(row.kitap_adi);
        })
    }
})