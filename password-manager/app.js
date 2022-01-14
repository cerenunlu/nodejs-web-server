var storage = require("node-persist"); //indirdiğimiz modulleri buraya dahil etmek için
storage.initSync();
const { command } = require("yargs");
var argv = require("yargs")
    .command('create', 'yeni hesap oluşturur', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                descripton: 'hesap adi',
                type: 'string'
            },
            username: {
                demand: true,
                alias: 'u',
                descripton: 'hesabin kullanici adi',
                type: 'string'
            },
            password: {
                demand: true,
                alias: "p",
                descripton: 'parola',
                type: 'string'
            }
        }).help('help');
    })
    .command('get', 'hesap bilgilerini görüntüler', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                descripton: 'hesap adi',
                type: 'string'
            }
        }).help('help');
    }).help('help')
    .argv;

var command2 = argv._[0];
if (command2 === 'create' && typeof argv.name !== 'undefined' && argv.name.length > 0 
&& typeof argv.username !== 'undefined' && argv.username.length > 0 
&& typeof argv.password !== 'undefined' && argv.password.length > 0) {

    var createdAccount = createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password
    });
    console.log('hesap oluşturuldu...');
} else if (command2 === 'get' && argv.name !== 'undefined' && argv.name.length > 0) {
    var account = getAccount(argv.name);
    if (typeof account !== 'undefined') {
        console.log(account);
    } else {
        console.log("aradiginiz kayit bulunamadi")
    }

} else {
    console.log("lütfen geçerli komut giriniz");
}





//Array...
function createAccount(account) {
    //Onceki kayıtları al //getitemSync
    var accounts = storage.getItemSync("accounts");
    //eger kayıt yoksa array oluştur
    if (typeof accounts === 'undefined') {
        accounts = [];
    }

    //account verisini array içersine kaydet
    accounts.push(account);
    //setItemSync ile kalıcı olarak kaydet
    storage.setItemSync("accounts", accounts);

    return account;

}

function getAccount(accountName) {

    var accounts = storage.getItemSync("accounts");
    var matchedAccount;
    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    })
    return matchedAccount;

}

// createAccount({
//     name: "twitter",
//     username: "test2@gmail.com",
//     password: "1235"
// });

// var twitterAccount=getAccount("facebook");
// console.log(twitterAccount);