import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';
import { Editor } from '@tinymce/tinymce-react';
import '../../css/flex.css';
// TODO: 讀取文章以進行編輯
const mapStateToProps = state => {
	return {
		articles: state.articles,
		mode: state.mode,
		selectedArticle: state.selectedArticle,
		selectedArticleId: state.selectedArticleId,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addArticle: article => dispatch(addArticle(article))
	}
}

class connectedTextEditor extends React.Component {
	constructor(props) {
		super(props);
		const self = this;
		self.state = {
			title: '',
			content: '',
			selectedArticle: {}
		}
		// 取reducer的資料寫進 component state
		if (Array.isArray(props.articles) && props.articles.length > 0) {
			// 將props中的資料分離出來並寫入compoent state
			const { title, body } = selectedArticle.call(self, props);
			// self.state.selectedArticleId = props.selectedArticleId;
			self.state.title = title;
			self.state.content = body;
		}

		this.handleEditorChange = this.handleEditorChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleEditorChange = (content, editor) => {
		this.setState({
			content: content
		})
		console.log('Content was updated:', content);
	}

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
	// FIXME: 改變 selectedArticleId 時需要改變編輯器中內容

	// change local, submit remote
	render() {
		const self = this;
		// const { title, content, selectedArticleId } = self.state;
		const { body, title } = self.props.selectedArticle;

		return (
			(self.props.mode === 'edit') ?
				<form className="flex-column" onSubmit={self.handleSubmit}>
					Title:<input className="flex-item" name="title" id="title" type="text" onChange={self.handleChange} value={title || ''} />
					<Editor
						initialValue={body || ''}
						init={{
							height: 500,
							menubar: false,
							plugins: [
								'advlist autolink lists link image charmap print preview anchor',
								'searchreplace visualblocks code fullscreen',
								'insertdatetime media table paste code help wordcount'
							],
							toolbar:
								'undo redo | formatselect | bold italic backcolor |' +
								'alignleft aligncenter alignright alignjustify |' +
								'bullist numlist outdent indent | removeformat | help'
						}}
						onEditorChange={this.handleEditorChange}
					/>
					<input className="flex-horizontal-center" type="submit" value="Submit" />
				</form>
				: null
		);
	}
}
// 選出當前文章
function selectedArticle(props) {
	const { articles, selectedArticleId } = props;
	let fltrArticle = [];
	// 若不存在 selectedArticleId,預設使用第一筆
	if (selectedArticleId && typeof selectedArticleId === 'string') {
		fltrArticle = articles.filter(article => {
			return article.articleId === selectedArticleId;
		})
	}
	return fltrArticle[0];
}

const TextEditor = connect(
	mapStateToProps,
	mapDispatchToProps
)(connectedTextEditor);

export default TextEditor;

