import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
	articles: [
		{
			"userId": 0,
			"id": 0,
			"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
		}
	],
	mode: "edit"
};

function rootReducer(state = initialState, action) {
	const { type, payload } = action;
	// add new Article
	if (type === ADD_ARTICLE) {
		let newState = Object.assign({}, state, {
			articles: state.articles.concat({
				userId: state.articles.length,
				id: state.articles.length,
				title: payload.title,
				body: payload.content
			})
		})
		console.log(newState.articles);
		return newState;

	}
	return state;
};

export default rootReducer;
