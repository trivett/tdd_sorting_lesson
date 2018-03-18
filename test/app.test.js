const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  it('should respond to the GET method at root with important array', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.todos).toEqual(['shower', 'feed cat']);
      done();
    });
  });
});

describe('Test the sort path', () => {
  it('should response the post method', (done) => {
    request(app).post('/sort')
      .send({ "numbers": [2, 3, 1] })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body.sorted).toEqual([1, 2, 3]);
        done();
      });
  });
});
