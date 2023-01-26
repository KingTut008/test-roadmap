import { put, takeEvery } from 'redux-saga/effects';
import { loadRoadMap } from '../reducers/roadMapSlice';
import { createAction } from '@reduxjs/toolkit';

function* getPolylineCoordinates(action) {
  const { formLat, fromIng, toIng, toLat } = action.payload;
  yield put(loadRoadMap(`${fromIng},${formLat};${toIng},${toLat}`));
}

function* rootSaga() {
  yield takeEvery('GET_POLYLINE_COORDINATES', getPolylineCoordinates);
}

export const getPolyline = createAction('GET_POLYLINE_COORDINATES');

export { rootSaga };
