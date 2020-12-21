import { ADD_ARTICLE, SWITCH_MODE } from '../constants/action-types';

const initialState = {
	articles: [
		{
			"userId": 0,
			"id": 0,
			"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
		}
	],
	mode: "edit" //mode: edit & read
};

function rootReducer(state = initialState, action) {
	const { type, payload } = action;
	let newState
	// add new Article
	if (type === ADD_ARTICLE) {
		newState = Object.assign({}, state, {
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
	// change mode
	if (type === SWITCH_MODE) {
		newState = Object.assign({}, state, {
			mode: state.mode === 'edit' ? 'read' : 'edit'
		})
	}
	console.log('mode:' + newState.mode);
	return newState;
};

export default rootReducer;
