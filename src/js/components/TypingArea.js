import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';
import '../../css/flex.css';

const mapStateToProps = state => {
	return {
		mode: state.mode
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addArticle: article => dispatch(addArticle(article))
	}
}

class connectedTypingArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(e) {
		const elm = e.target;
		this.setState({ [elm.id]: elm.value });
		console.log({ [elm.id]: elm.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const { content, title } = this.state;
		this.props.addArticle({ title, content });
		this.setState({ content: '', title: '' })
	}
	render() {
		return showTemplate.call(this);
	}
}
// 根據 mode 來顯示
function showTemplate() {
	const self = this;
	const { mode } = self.props;
	let tmplt = null;

	if (mode === 'edit') {
		tmplt = (
			<form className="flex-column" action="" onSubmit={self.handleSubmit}>
				Title:<input className="flex-item" name="title" id="title" type="text" onChange={self.handleChange} value={self.state.title} />
				Article<textarea className="flex-item" name="content" id="content" cols="50" rows="50" onChange={self.handleChange} value={self.state.content}></textarea>
				<input className="flex-horizontal-center" type="submit" value="Submit" />
			</form>
		)
	}
		return tmplt;
}

const TypingArea = connect(
	mapStateToProps,
	mapDispatchToProps
)(connectedTypingArea);

export default TypingArea;