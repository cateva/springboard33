process.env.NODE_ENV = "test";

const request = require("supertest");//supertest is npm build in module

const app = require("../app");

describe("POST /", function() {
    test("return developer information", async function() {
        const resp = await (await request(app)
            .post(``))
            .send({
                "developers": ["joelburton", "elie"]
            });
        expect(resp.body.length).toEqual(2);
        expect(resp.statusCode).toBe(200);

    });

});