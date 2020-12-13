import { createStore } from 'easy-peasy';
import model from './model';
import { Configuration } from '../configuration';

const userInfoService = Configuration.userInfoFetcher;

const store = createStore(model, {
  // 👇 provide injections to our store
  injections: { userInfoService },
});

export default store;
