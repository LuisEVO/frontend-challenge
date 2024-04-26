import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { FormInputs } from '../types/form-inputs.type';
import { User, UserWidthAge } from '../types/user';
import { getYearsFromDate } from '../../../common/utils/get-years-from-date';

export interface LoginState {
  user?: UserWidthAge;
  form?: FormInputs;
}

const initialState: LoginState = {
  user: undefined,
  form: undefined,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setFormInputs: (state, action: PayloadAction<FormInputs>) => {
      state.form = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = {
        ...action.payload,
       age: getYearsFromDate(action.payload.birthDay)
      };
    },
    reset: (state) => {
      state.form = undefined;
      state.user = undefined;
    },
  },
});

export const loginActions = loginSlice.actions;
const loginReducer = loginSlice.reducer;

export default loginReducer;
