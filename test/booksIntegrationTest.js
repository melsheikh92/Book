require('should');
const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../index.js");
const Book = require("../model/bookModel");
const agent = request.agent(app);

process.env.ENV = "Test"

describe("Integration Test for  book", () => {
    it('Test adding book via post request', () => {
        const bookPost = { title: "test", author: "test", genre: "test", read: false };
        agent.post('/api/book')
            .send(bookPost)
            .expect(200)
            .end((err, results) => {
                console.log(results);
                results.body.read.should.not.equal('false');
                results.body.should.have.property('_id');
            })
    });
    afterEach((done) => {
        Book.deleteMany({}).exec();
        done();
    });
    after(done => {
        mongoose.connection.close();
        app.server.close(done());
    });
});