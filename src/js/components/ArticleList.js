import { Component } from "react";
import { connect } from "react-redux";
import { selectedId } from '../actions';
import '../../css/flex.css';

const mapStateToProps = function (state) {
	return { articles: state.articles }
}

const mapDispatchToProps = dispatch => {
	return {
		selectedId: articleId => dispatch(selectedId(articleId))
	}
}

class ConnectedArticleList extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	// 處理點擊個別文章
	handleClick(event) {
		const elm = event.target
		const elmId = elm.getAttribute('data-id')
		this.props.selectedId({ selectedId: elmId })
	}

	render() {
		const { articles } = this.props
		return (
			<div>
				<h2>Artile List</h2>
				<ul>
					{
						articles.map(article => {
							return (
								<li key={article.articleId} data-id={article.articleId} onClick={this.handleClick}>
									{article.title}
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

const ArticleList = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedArticleList)

export default ArticleList