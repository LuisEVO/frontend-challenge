import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../../features/Auth/store/login-slice';
import plansReducer from '../../features/Plans/store/plans-slice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    plans: plansReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
