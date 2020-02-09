var mongoos = require("mongoose");

var { Schema } = mongoos;

var bookModel = new Schema({
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, default: false }
});
module.exports = mongoos.model("Book", bookModel)