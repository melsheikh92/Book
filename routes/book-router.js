let express = require("express");
let controller = require("../controller/book-controller");
let Book = require("../model/bookModel");

function router() {
    let bookRouter = express.Router();

    bookRouter.route("/book")
        .post(controller.post)
        .get(controller.get);

    bookRouter.route("/book/:bookId")
        .put((req, res) => {
            Book.findById(req.params.bookId, (err, book) => {

                book.title = req.body.title;
                book.author = req.body.author;
                book.genre = req.body.genre;
                book.read = req.body.read;
                book.save();

                return res.json(book);
            });
        })
        .get((req, res) => {
            Book.findById(req.params.bookId, (err, book) => {
                res.json(book);
            })
        }).delete((req, res) => {
            req.book.remove((err) => {
                if (err) {
                    return res.status(400).send(err);
                } else {
                    res.sendStatus(204);
                }
            })
        });
    return bookRouter
}

module.exports = router;