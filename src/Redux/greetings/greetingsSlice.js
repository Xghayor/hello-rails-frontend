import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greetings: null,
  loading: false,
  error: null,
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/greetings');
    const data = await response.json();
    return data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.loading = false;
        state.greetings = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
