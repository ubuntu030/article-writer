import { connect } from "react-redux";

const mapStateToProps = state => {
	return { articles: state.articles, selectedArticleId: state.selectedArticleId }
}
// 篩選出當前選擇的Article
function ConnectedArticleDisplay({ articles, selectedArticleId }) {
	let article = articles.filter(article => {
		return article.articleId === selectedArticleId;
	})
	article = article[0];
	const { title, body } = article;
	return (
		(article && typeof article === 'object') ?
			<div>
				<p>Title: {title}</p>
				<p>{body}</p>
			</div>
			: null
	)
}

const ArticleDisplay = connect(
	mapStateToProps
)(ConnectedArticleDisplay)

export default ArticleDisplay