import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { ActionType } from "typesafe-actions";
/**
 * Redux store setup
 */
import * as actions from "./actions/config.actions";
import { AppState } from "./states/app.state";
import reducers from "./reducers";

type Action = ActionType<typeof actions>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const epicMiddleware = createEpicMiddleware<Action, Action, AppState>();

function configureStore(initialState?: AppState) {
  // configure middlewares
  const middlewares = [
    epicMiddleware,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    reducers,
    initialState,
    enhancer
  );
}

const store = configureStore();

// epicMiddleware.run(epics);

export default store;
