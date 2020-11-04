import request from '@/utils/request';

export interface LoginDto {
  email: string;
  password: string;
}

const authApi = {
  login: async (payload: LoginDto) =>
    request.post(`${process.env.API_URL}/auth/login`, {
      username: payload.email,
      password: payload.password,
    }),
};

export default authApi;
