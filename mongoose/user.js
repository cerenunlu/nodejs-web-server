var mongoose=require("mongoose");

var schema = mongoose.Schema;

var userSchema = new schema({
    ad: String,
    soyad: String,
    dogumTarihi: String,
    email: String
});

var User = mongoose.model('User', userSchema);
module.exports = User; //her yerden kullanılması için dışarıya export ederiz
