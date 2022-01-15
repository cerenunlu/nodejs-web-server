var Sequelize = require("sequelize");
var sequelize = new Sequelize("ToDoAPI", "root", "123.Root", {
    host: 'localhost',
    dialect: 'mysql'
});

var db = {};

db.Todo = sequelize.import(__dirname + "/models/todo.js");
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
