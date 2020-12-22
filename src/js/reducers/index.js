import { ADD_ARTICLE, SWITCH_MODE, SELECTED_ID } from '../constants/action-types';

const initialState = {
	articles: [
		{
			"userId": 0,
			"id": 0,
			"articleId": "1608529481135",
			"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
		}
	],
	mode: "edit",	//mode: edit & read
	selectedArticleId: "1608529481135",	// 當選擇的文章
	selectedArticle: {}
};

function rootReducer(state = initialState, action) {
	const { type, payload } = action;
	// add new Article
	if (type === ADD_ARTICLE) {
		let newState = Object.assign({}, state, {
			articles: state.articles.concat({
				userId: 0,
				title: payload.title,
				body: payload.content,
				articleId: new Date().getTime().toString()
			})
		})
		console.log(newState.articles);
		return newState;
	}
	// change mode
	if (type === SWITCH_MODE) {
		let newState = Object.assign({}, state, {
			mode: state.mode === 'edit' ? 'read' : 'edit'
		})
		console.log('mode:' + newState.mode);
		return newState;
	}
	// update selectedArticleId
	if (type === SELECTED_ID) {
		let { selectedId } = payload;
		let fltrArticle = {};
		if (selectedId && typeof selectedId === 'string') {
			fltrArticle = state.articles.filter(article => {
				return article.articleId === selectedId;
			})
		}
		let newState = Object.assign({}, state, {
			selectedArticleId: selectedId,
			selectedArticle: fltrArticle[0]
		})
		console.log('selectedId:' + newState.selectedArticleId);

		return newState;
	}

	return state;
};

export default rootReducer;
