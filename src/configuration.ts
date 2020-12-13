import { IUserInfo } from './services/userInfo.interface';
import { UserInfoImpl } from './services/impl/UserInfoImpl';

class ManualDependenciesConfiguration {
  private readonly _userInfoFetcher: IUserInfo;
  
  constructor() {
      this._userInfoFetcher = new UserInfoImpl();
    
  }
  get userInfoFetcher(): IUserInfo {
    return this._userInfoFetcher;
  }
}
export const Configuration = new ManualDependenciesConfiguration();
