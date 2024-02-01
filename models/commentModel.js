const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",  // --> Refer to POST Model
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model("Comment", commentSchema)