const dotenv = require("dotenv").config()
module.exports = require("knex")({
    client:"mysql",
    connection:{
        host:process.env.Host,
        user:process.env.User,
        password:process.env.Password,
        database:process.env.Database
    }
},console.log("database connected...."))