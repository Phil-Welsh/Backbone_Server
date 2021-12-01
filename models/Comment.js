const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    place: {
        type: mongoose.Types.ObjectId,
        ref: "Place",
    }
},
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
