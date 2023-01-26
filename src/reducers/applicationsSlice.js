import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadApplicationApi } from '../https/applicationApi';

const initialState = {
  applicationsItems: [],
  status: 'loading' | 'success' | 'error',
  targetItem: 0,
  error: '',
};

export const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setTarget: (state, action) => {
      state.targetItem = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadApplications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadApplications.fulfilled, (state, action) => {
        state.status = 'success';
        state.applicationsItems = action.payload;
      })
      .addCase(loadApplications.rejected, (state) => {
        state.status = 'error';
        state.error = 'При загрузке данных произошла ошибка!';
      }),
});

export const loadApplications = createAsyncThunk('application/get', () => {
  return loadApplicationApi();
});

export const { reducer: applicationsReducer, actions: applicationsActions } = applicationsSlice;
