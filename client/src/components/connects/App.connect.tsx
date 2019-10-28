import { ActionType } from 'typesafe-actions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";

import * as actions from '../../store/actions/config.actions';
import App from "../../App";
import { AppState } from "../../store/states/app.state";

type Action = ActionType<typeof actions>;

const mapStateToProps = (state: AppState) => ({
  loading: state.config.loading,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
  setConfig: (status: boolean) => actions.configSetAction(status)
}, dispatch as any);

export default connect(mapStateToProps, mapDispatchToProps)(App);
