import FetchHttp from '../../../core/http/fetch-http';
import { User } from '../types/user';

export default class UsersHttp {
  static getOne(): Promise<User> {
    return FetchHttp.get<User>(`${process.env.REACT_APP_BASE_URL}/user.json`);
  }
}
