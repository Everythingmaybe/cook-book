import { combineEpics } from "redux-observable";
import configEpic from './config.epic';

const epics = combineEpics(
  ...configEpic,
);

export default epics;
