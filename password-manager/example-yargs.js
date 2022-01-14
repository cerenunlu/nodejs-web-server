

var argv = require("yargs")
.command('hello','selamlamak',function(yargs){
    yargs.options({
        name :{
            demand:true,
            description:'adinizi girin',
            alias : 'n',
            type: 'string'
        },
        lastname:{
            demand: true,
            description:'Soyadinizi girin',
            alias : 'l',
            type: 'string'
        }
    }).help('help');
})
.command('command','aciklama..',function(yargs){

})
.help('help')
.argv;

var command = argv._[0];


// console.log(argv._);
// console.log(argv.name);

if (command === 'hello' && typeof argv.name !== 'undefined') {
    console.log('hello' + argv.name);
}else if(command==="hello"){
    console.log("hello world");
}
