const Sequelize = require("sequelize");

const sequelize = new Sequelize('todo_api', 'root', '123.Root', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 10]
        },
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1, 20]
        }
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }

}); //create table

sequelize.sync({ force: false }).then(() => {
    console.log("veritabanina baglanti saglandi.......");
    /***************Create User
        User.create({
            username: "Defne",
            email: "defne@outlook.com",
            phone: "505848434",
            isActive: true
        }).then(
            row=>{
                console.log(row.toJSON());
            }
        )
    */

    /****************Listing***************** */

    User.findAll({
        where: {

        },
        order: [
            ['id', 'DESC']
        ],
        raw: true
    }).then(function (users) {
        console.log(users);
    }, function () {

    });

    // User.findOne({
    //     where :{
    //         id:3
    //     }
    // }).then(function(row){
    //   console.log(row.toJSON());
    // })

    // User.findByPk(1).then(function(row){
    //     console.log(row.toJSON());
    // })

    /*******Destroy********* */
    /*
    User.destroy({
        where : {
            id : 1
        }
    }).then(function(rowDeleted){
        if(rowDeleted===0){
            console.log("id not found");
        }else{
            console.log("deleted successfull");
        }
    })
    */

    /**********Update******** */

    //değiştirmek istenen kayıt bulunur
    //bulunan kayıt instance ın da değişiklik yapılır.

    User.findOne({
        where: {
            id: 3
        }
    }).then(function (user) {
        if (user) {
         user.update({
             email : "info@nodejs.com"
         }).then(function(usr){
             console.log(usr.toJSON());
         })
        }
    })


})