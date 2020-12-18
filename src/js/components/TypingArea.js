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
			content: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange() {

	}

	handleSubmit(e) {
		e.preventDefault();
		
	}
	render() {
		const self = this;
		return (
			<form action="" onSubmit={self.handleSubmit}>
				<textarea name="article" id="article" cols="50" rows="50" onChange={self.handleChange}></textarea>
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