import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { teamsApi } from './teams.api';

export const store = configureStore({
  reducer: {
    [teamsApi.reducerPath]: teamsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(teamsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
