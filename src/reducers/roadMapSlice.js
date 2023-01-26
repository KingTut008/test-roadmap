import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { osrmApi } from '../https/osrmApi';

const initialState = {
  data: {},
  status: 'loading' | 'success' | 'error',
  error: '',
};

export const roadMapSlice = createSlice({
  name: 'roadMap',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadRoadMap.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadRoadMap.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(loadRoadMap.rejected, (state) => {
        state.status = 'error';
        state.error = 'При загрузке данных произошла ошибка!';
      }),
});

export const loadRoadMap = createAsyncThunk('roadMap/get', (coord) => {
  return osrmApi(coord);
});

export const { reducer: roadMapReducer, actions: roadMapActions } = roadMapSlice;
