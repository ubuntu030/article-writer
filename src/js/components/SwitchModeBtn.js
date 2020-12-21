import { connect } from "react-redux";
import { switchMode } from '../actions';

const mapDispatchToProps = dispatch => {
	return {
		switchMode: mode => dispatch(switchMode(mode))
	}
}

const connectedSwitchModeBtn = props => {
	return (
		<button onClick={props.switchMode}>Mode</button>
	)
}

const SwitchModeBtn = connect(
	null,
	mapDispatchToProps
)(connectedSwitchModeBtn);

export default SwitchModeBtn;