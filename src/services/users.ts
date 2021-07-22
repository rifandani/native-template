import axios from 'axios';
// files
import {User, ApiResponseUser} from '../types/user';

const usersApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await usersApi.get<ApiResponseUser[]>('/users');

    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getUser = async (userId: number): Promise<User> => {
  try {
    const res = await usersApi.get<ApiResponseUser>(`/user/${userId}`);

    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
