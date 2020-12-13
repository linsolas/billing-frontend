import { UserInfo } from '../domains/UserInfo';

export interface IUserInfo {
  fetchInfo(): Promise<UserInfo>;
}
