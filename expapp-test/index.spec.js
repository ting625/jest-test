const request = require("supertest");
const app = require('./index');

/* async done is no longer supported in the latest version of jest
describe("Test todo methods", () => {
    it(`Returns all todos`, async done => {
        await request(app).get("/todo").expect(200).then((response) => {
            expect(response.body.length).toBe(3);
        });
        done();
    });
    it(`Returns a todo with id: ${2}`, async done => {
        await request(app).get("/todo/2").expect(200).then((response) => {
            expect(response.body.name).toBe("Get pizza for dinner");
        });
        done();
    });
});

describe("Test responses from querying an external API", () => {
    it(`should retrieve a random Chuck Norris joke`, async done => {
        let jokeResp = await request(app).get('/joke');
        let joke = JSON.parse(jokeResp.text);
        expect(joke.value).toBeTruthy();
        done();
    });
    it(`No 2 Chuck jokes will be the same`, async done => {
        let joke1 = await request(app).get('/joke');
        let joke2 = await request(app).get('/joke');
        let j1 = JSON.parse(joke1.text);
        let j2 = JSON.parse(joke2.text);
        expect((j1.value === j2.value)).toBeFalsy();       
        done();
    });
});
*/


// Re-write with latest syntax
describe("Test todo methods", () => {
    it("Returns all todos", async () => {
        const response = await request(app).get("/todo").expect(200);
        expect(response.body.length).toBe(3);
    });

    it("Returns a todo with id: 2", async () => {
        const response = await request(app).get("/todo/2").expect(200);
        expect(response.body.name).toBe("Get pizza for dinner");
    });
});


describe("Test responses from querying an external API", () => {
    it("should retrieve a random Chuck Norris joke", async () => {
        const jokeResp = await request(app).get('/joke');
        const joke = JSON.parse(jokeResp.text);
        expect(joke.value).toBeTruthy();
    });

    it("No 2 Chuck jokes will be the same", async () => {
        const joke1 = await request(app).get('/joke');
        const joke2 = await request(app).get('/joke');
        const j1 = JSON.parse(joke1.text);
        const j2 = JSON.parse(joke2.text);
        expect(j1.value === j2.value).toBeFalsy();
    });
});