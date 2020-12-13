import intl, { IntlModel } from './intl.model';
import userInfo, { UserInfoModel } from './user-info.model';
import { EmployeesModel, employeesModel } from './employees.model';

export interface AppStoreModel {
  intl: IntlModel;
  userInfo: UserInfoModel;
  employees: EmployeesModel;
}

const model: AppStoreModel = {
  intl,
  userInfo,
  employees: employeesModel,
};

// 👇 export the typed hooks
export default model;
