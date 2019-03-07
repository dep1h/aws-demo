var request = require("supertest");
var app = require("../app.js");
describe("GET /", function() {
 it("respond with hello world", function(done) {
 
    //navigate to root and check the the response is "Welcome App"
 request(app).get("/").expect("Welcome to our App!", done);
 });
});