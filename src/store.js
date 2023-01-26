import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import createSagaMiddleware from 'redux-saga';
import { applicationsReducer } from './reducers/applicationsSlice';
import { roadMapReducer } from './reducers/roadMapSlice';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    applications: applicationsReducer,
    roadMap: roadMapReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
setupListeners(store.dispatch);
