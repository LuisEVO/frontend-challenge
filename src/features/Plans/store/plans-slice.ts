import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { applyDiscount } from '../../../common/utils/apply-discount';
import { slugify } from '../../../common/utils/slugify';
import PlansHttp from '../http/plans-http';
import { Plan } from '../types/plan';

const PlanIconMap = new Map<string, string>([
  ['plan-en-casa', 'HomeLight'],
  ['plan-en-casa-y-clnica', 'HospitalLight'],
  ['plan-en-casa-chequeo', 'HomeLight'],
]);

const getAllPlans = createAsyncThunk('plans/getAll', () => PlansHttp.getAll());

export interface PlansState {
  isLoaded?: boolean;
  typePlan?: 'forMe' | 'forAnyone';
  plans: Plan[];
  plansFiltered: Plan[];
  planSelected?: Plan;
}

const initialState: PlansState = {
  isLoaded: false,
  plans: [],
  plansFiltered: [],
};

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    setPlansToShow: (
      state,
      action: PayloadAction<{ userAge: number; addDiscount: boolean }>
    ) => {
      const { userAge, addDiscount } = action.payload;
      const plans = current(state.plans);
      state.plansFiltered = plans
        .filter((plan) => plan.age >= userAge)
        .map((plan) => ({
          ...plan,
          offerPrice: addDiscount ? applyDiscount(plan.price, 0.05) : undefined,
        }));
    },
    setPlanSelected: (state, action: PayloadAction<Plan>) => {
      state.planSelected = action.payload;
    },
    setTypePlan: (state, action: PayloadAction<'forMe' | 'forAnyone'>) => {
      state.typePlan = action.payload;
    },
    reset: (state) => {
      state.isLoaded = false;
      state.typePlan = undefined;
      state.plans = [];
      state.plansFiltered = [];
      state.planSelected = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPlans.fulfilled, (state, action) => {
      state.plans = action.payload.list.map((plan) => ({
        ...plan,
        slug: slugify(plan.name),
        recommended: plan.price === 99,
        icon: PlanIconMap.get(slugify(plan.name)),
      }));
      state.isLoaded = true;
    });
  },
});

export const plansActions = {
  ...plansSlice.actions,
  getAllPlans,
};

const plansReducer = plansSlice.reducer;

export default plansReducer;
