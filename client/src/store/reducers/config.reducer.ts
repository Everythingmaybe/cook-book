import {ActionType, getType} from "typesafe-actions";

import * as actions from '../actions/config.actions';
import {ConfigState, initialConfigState} from "../states/config.state";

type Action = ActionType<typeof actions>;

export const configReducer = (state: ConfigState = initialConfigState, action: Action): ConfigState => {
  switch (action.type) {
    case getType(actions.configSetAction): {
      return (Object.assign({}, state, { loading: action.payload }) as ConfigState);
    }

    default:
      return state;
  }
};
