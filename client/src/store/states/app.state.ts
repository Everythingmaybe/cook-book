import { ConfigState, initialConfigState } from "./config.state";

export interface AppState {
  config: ConfigState ;
}

export const initialAppState: AppState = {
  config: initialConfigState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
