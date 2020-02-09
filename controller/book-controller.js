let Book = require("../model/bookModel");

function post(req, res) {
    const book = new Book(req.body)
    console.log(book)
    book.save()
    return res.json(book)
}
function get(req, res) {
    const query = {}
    if (req.query.genre) {
        query.genre = req.query.genre
    }
    Book.find(query, (err, books) => {
        // const returnedBooks = books.map((book => {
        //     const newBook = book.toJSON();
        //     newBook.links = `http://${req.headers.host}/api/book/${book._id}`;
        //     return newBook
        // }))
        res.json(books);
    })
}

module.exports = { post, get };