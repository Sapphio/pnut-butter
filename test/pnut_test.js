const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const nock = require("nock");
chai.use(chaiAsPromised);
chai.should();

const tavrn = require("../lib/tavrn");

before(function() {
  let base = "https://api.sapphire.moe:7070/";

  nock(base).get("/somewhere").reply(200, {});

  nock(base).post("/somewhere").reply(200, {});

  nock(base).put("/somewhere").reply(200, {});

  nock(base).patch("/somewhere").reply(200, {});
});

after(function() {
  nock.cleanAll();
});

describe("The tavrn-butter library", () => {
  it("should be able to send a custom GET request", () => {
    return tavrn.custom("/somewhere").should.become({});
  });

  it("should be able to send a custom POST request", () => {
    return tavrn.custom("/somewhere", "POST", {
      text: "sometext"
    });
  });

  it("should be able to send a custom PUT request", () => {
    return tavrn.custom("/somewhere", "PUT", {
      text: "sometext"
    });
  });

  it("should be able to send a custom PATCH request", () => {
    return tavrn.custom("/somewhere", "PATCH", {
      text: "sometext"
    });
  });
});
