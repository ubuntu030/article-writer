import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';

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
		const self = this;
		return (
			<form action="" onSubmit={self.handleSubmit}>
				<input name="title" id="title" type="text" onChange={self.handleChange} value={self.state.title} />
				<textarea name="content" id="content" cols="50" rows="50" onChange={self.handleChange} value={self.state.content}></textarea>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

const TypingArea = connect(
	null,
	mapDispatchToProps
)(connectedTypingArea);

export default TypingArea;