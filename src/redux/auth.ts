import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi, { LoginDto } from '@/api/auth';

export const login = createAsyncThunk(
  'Auth/login',
  async (payload: LoginDto, { rejectWithValue }) => {
    try {
      const response = await authApi.login(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

interface InitialState {
  isLogining: boolean;
}

export const { actions, reducer } = createSlice({
  initialState: { isLogining: false } as InitialState,
  name: 'Auth',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.rejected, (state: InitialState) => {
      state.isLogining = false;
    });
  },
});

export default reducer;
