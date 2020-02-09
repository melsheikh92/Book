// Imports
require("should");
let sinon = require("sinon");
let controller = require("../controller/book-controller");
let Book = require("../model/bookModel");

// Test Book Controller
describe("Book controller Tests", () => {
    describe("post", () => {
        it("should not allow an empty title on post", () => {
            const book = function (book) { this.save = {} }
            const req = {
                body: {
                    author: "Mahmoud"
                }
            };
            const res = {
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()
            }
            res.status.calledWith(400).should.equal(true, "Bad Status");
        });
    });
    describe("get", () => {
        // TODO
    });
});