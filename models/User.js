const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    icon: {
        type: String,
        default: "https://media.istockphoto.com/photos/happy-little-orange-havanese-puppy-is-sitting-in-the-grass-picture-id520942487?k=20&m=520942487&s=612x612&w=0&h=2yhk4wJM8SBasGbOTIWOtkq4YpRMEUvhCbg-SSUYHtY=",
    },
    password: { type: String, required: true, select: false },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    signup_date: {
        type: Date,
        default: Date.now,
    }
});

userSchema.set("toJSON", {
    transform: (doc, ret, opt) => {
        delete ret["password"];
        return ret;
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
