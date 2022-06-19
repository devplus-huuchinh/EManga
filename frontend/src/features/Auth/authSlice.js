import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';

export const userProfile = createAsyncThunk('auth/userProfile', async (id) => {
  const response = await authApi.userProfile();
  console.log(response);
});

const initialState = {
  loading: false,
  data: {},
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducer: {
    userData: (state, action) => {},
  },
});
