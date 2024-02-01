const Post = require("../models/postModel")
const Comment = require("../models/commentModel")


//business Logic

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        const comment = new Comment({
            post, user, body
        })

        //save into DB
        const savedComment = await comment.save();

        //finding post by ID, and Add the comment to its comment array




    }

    catch (error) {
        console.log

    }

}
