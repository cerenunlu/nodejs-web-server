var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", function (error, db) {
    if (error) {
        throw error;
        console.log("baglanti yok");

    } else {
        console.log("baglanti saglandi");
        var newData = {
            kitap_adi: "1984",
            basim_yili: 1949,
            yazar: "George Orwell",
            yayin_evi: "Yayinevi"
        }
        //where, new data,callback
        db.collection("kitap").update({ yayin_evi: "Yayinevi" }, newData, function (err,result) {
             if(err){
                 throw err;
                 console.log("error");
             }else{
                 console.log("Updating Success");
                 db.collection("kitap").find({}).toArray(function(err,row){
                     console.log(row);
                 })
             }
        })
    }
})