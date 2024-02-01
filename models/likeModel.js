const mongoose = require("mongoose");
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",  // --> Refer to POST Model
    },
    user: {
        type: String,
        required: true,
    },


});

module.exports = mongoose.model("Like", likeSchema)
