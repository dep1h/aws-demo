var request = require("supertest");
var app = require("../index.js");
describe("GET /", function() {
 it("respond with hello world", function(done) {
 
    //navigate to root and check the the response is "Welcome App"
 request(app).get("/").expect("hey world", done);
 });
});