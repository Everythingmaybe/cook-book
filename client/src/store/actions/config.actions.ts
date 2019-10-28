import { createAction } from 'typesafe-actions';

enum EConfigActions {
  configGetAction = '@@config/GET',
  configSetAction = '@@config/SET',
}

// export const configGetAction = createAction(EConfigActions.configGetAction, resolve => (loading: boolean) => resolve(loading));
export const configSetAction = createAction(EConfigActions.configSetAction, resolve => (loading: boolean) => resolve(loading));
