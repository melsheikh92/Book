let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let Book = require("./model/bookModel");
let bookRouter = require("./routes/book-router");

//Config Database for test and production
if (process.env.ENV == 'Test') {
    // test
    let db = mongoose.connect("mongodb://localhost/bookAPI");
} else {
    //production
    let db = mongoose.connect("mongodb://localhost/bookAPI");
}
//Server
let server = express();
// configure body parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// configure router
server.use("/api", bookRouter);

server.get('/', (req, res) => {
    res.end("welcome to express js");
});

server.server = server.listen(process.env.PORT, (res) => {
    console.log(`server started on port: ${process.env.PORT}`);
});

module.exports = server;