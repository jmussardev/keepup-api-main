const request = require("supertest");

const { app } = require("../../../app.js");

const user_id = "633e81c6db50460c7b4eacd0";
const event_id = "633490ebf0805bc06edcbfe5";

describe("PUT /event/:id/add/participant/:user", function () {
  it("should return a json with status 200", function (done) {
    request(app)
      .put(`/api/v1/event/${event_id}/add/participant/${user_id}`)
      //   .send(sports())
      .set("Accept", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
