const express = require("express")
const app = express();

const PORT = 3000 || 4000;

//middleware

app.use(express.json());

//importing routes
const blog = require("./routes/blog")

//Api Mounting
app.use("/api/v1", blog)

const DB = require("./config/database")
DB();

//start the server

app.listen(PORT, () => {
    console.log(`App is Started at ${PORT}`);
})

//default route

app.get((req, res) => {
    res.send(`Hello`)
})