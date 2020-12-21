import { connect } from "react-redux";
import { switchMode } from '../actions';

const mapDispatchToProps = dispatch => {
	return {
		switchMode: mode => dispatch(switchMode(mode))
	}
}

const ConnectedSwitchModeBtn = props => {
	return (
		<button onClick={props.switchMode}>Mode</button>
	)
}

const SwitchModeBtn = connect(
	null,
	mapDispatchToProps
)(ConnectedSwitchModeBtn);

export default SwitchModeBtn;