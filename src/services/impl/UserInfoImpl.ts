import { IUserInfo } from '../userInfo.interface';
import { UserInfo } from '../../domains/UserInfo';
import axios from 'axios';

export class UserInfoImpl implements IUserInfo {
  async fetchInfo(): Promise<UserInfo> {
    try {
      const userInfo = await axios.get(`${window.env.BACKEND_ENDPOINT}/userinfo`);
      return userInfo.data;
    } catch (error) {
      throw Error('Error during getting current user info');
    }
  }
}
