import FetchHttp from '../../../core/http/fetch-http';
import { PlanResponse } from '../types/plan';

export default class PlansHttp {
  static getAll(): Promise<{ list: PlanResponse[] }> {
    return FetchHttp.get<{ list: PlanResponse[] }>(
      `${process.env.REACT_APP_BASE_URL}/plans.json`
    );
  }
}
