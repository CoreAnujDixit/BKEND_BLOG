const mongoose = require("mongoose");
const dbConnection = () => {
    mongoose.connect("mongodb://localhost:27017/BkendBlog")
        .then(console.log("Connected"))
        .catch((error) => {
            console.log('Connection Issue in Config');
            console.log(error)
            process.exit(1);
        })
}

module.exports = dbConnection;
