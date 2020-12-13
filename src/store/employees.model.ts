/* eslint-disable @typescript-eslint/camelcase */
import { action, Action, Thunk, thunk } from 'easy-peasy';
import Employee from '../domains/Employee';
import { Injections } from './injections';

export interface EmployeesModel {
  items: Employee[];

  loadSuccess: Action<EmployeesModel, Employee[]>;

  getAll: Thunk<EmployeesModel, void, Injections>;
  update: Thunk<EmployeesModel, Employee, Injections>;
}

export const employeesModel: EmployeesModel = {
  items: [],
  loadSuccess: action((state, employees) => {
    state.items = employees;
  }),

  getAll: thunk(async (actions, _void, { injections }) => {
    try {
      //const { authService } = injections;
      //const response = await Axios.get(`/api/employees`);
      //actions.loadSuccess(response.data);
    } catch (error) {
      //
      throw error;
    }
  }),
  update: thunk(async (actions, _void, { injections }) => {
    try {
      // const { userInfoService } = injections;
      //
    } catch (error) {
      //
    }
  }),
};
