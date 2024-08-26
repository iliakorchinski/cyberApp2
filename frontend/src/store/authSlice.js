import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
