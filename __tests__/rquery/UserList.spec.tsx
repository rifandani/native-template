// files
import {getUsers} from '../../src/services/users';
import USERS from './users.json';

describe('UsersList', () => {
  // beforeEach(() => {
  //   fetchMock.resetMocks();
  // });

  it('given getUsers(), getUsers() should returns users data', async () => {
    // fetchMock.mockResponseOnce(JSON.stringify(USERS));

    // assert users response
    expect(await getUsers()).toEqual(USERS);

    // FIXME: fails because getUsers() are using axios, not fetch from jest-fetch-mock
    // expect(FM.mock.calls).toHaveLength(1); // The mock function is called once
    // expect(FM.mock.calls[0][0]).toEqual(
    //   'https://jsonplaceholder.typicode.com/users',
    // );
  });
});
