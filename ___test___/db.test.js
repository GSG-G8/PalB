const build = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const getPost = require('../server/database/queries/getData');
const postUser = require('../server/database/queries/postUser');

beforeAll(() => build());
afterAll(() => connection.end());


test('insert data from function shoul return it', () => {
  const data = {
    name: 'test1', email: 'test2', password: 123, avatar: '123',
  };
  return postUser(data).then((res) => {
    const actual = res.rows[0];
    const expected = {
      name: 'test1', email: 'test2', password: 123, avatar: '123',
    };
    expect(actual.email).toEqual(expected.email);
  });
});

test('test get data', () => getPost().then((data) => {
  const actual = data.rows[0].id;
  const expected = 1;
  expect(actual).toBe(expected);
}));
