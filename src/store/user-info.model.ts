/* eslint-disable @typescript-eslint/camelcase */
import { action, Action, Thunk, thunk } from 'easy-peasy';
import { Injections } from './injections';
import { Status, UserInfo } from '../domains/UserInfo';

export interface UserInfoModel {
  user: UserInfo;
  status: Status;
  setStatus: Action<UserInfoModel, Status>;
  set: Action<UserInfoModel, UserInfo>;
  reset: Action<UserInfoModel, void>;
  fetch: Thunk<UserInfoModel, void, Injections>;
}

const initialUserinfo = {
  sub: '',
  zoneinfo: '',
  postal_country: '',
  mail: '',
  igg: '',
  last_name: '',
  login_ad: '',
  company_bdr_name: '',
  given_name: '',
  locale: '',
  contact_id: '',
  sgconnect_id: '',
  user_authorization: [],
  rc_local_sigle: '',
  sesame_id: '',
  user_bdr_id: '',
  company_bdr_level: '',
  name: '',
  is_sg_group_user: '',
  family_name: '',
  first_name: '',
  company_bdr_id: '',
  preferred_language: '',
  origin_network: '',
  auth_level: '',
};

const userInfo: UserInfoModel = {
  user: initialUserinfo,
  status: 'NOT_AUTHENTICATED',

  setStatus: action((state, payload: Status) => {
    state.status = payload;
  }),
  set: action((state, payload) => {
    state.user = payload;
  }),
  reset: action(state => {
    state.user = initialUserinfo;
  }),
  fetch: thunk(async (actions, payload, { injections }) => {
    try {
      const { userInfoService } = injections;
      const userInfo = await userInfoService.fetchInfo();
      actions.set(userInfo);
      actions.setStatus('AUTHENTICATION_SUCCESSFUL');
    } catch (error) {
      console.error(error);
      actions.reset();
      actions.setStatus('AUTHENTICATION_FORBIDDEN');
    }
  }),
};

export default userInfo;
