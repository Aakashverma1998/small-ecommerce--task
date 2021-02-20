const express = require("express")
const app = express()

//for table path...
require("./DB/create_tables")

const product1_route = require("./routes/audio")
const product2_route = require("./routes/phone")
const product3_route = require("./routes/laptop")
const product4_route = require("./routes/shoes")

app.use(express.json())
app.use("/", product1_route)
app.use("/", product2_route)
app.use("/", product3_route)
app.use("/", product4_route)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))