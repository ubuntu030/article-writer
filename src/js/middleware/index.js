import { ADD_ARTICLE } from '../constants/action-types';

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
	return function (next) {
		return function (action) {
			// do your stuff
			if (action.type === ADD_ARTICLE) {
				if (action.payload.title.trim() === '') {
					return dispatch({ type: "FOUND_NO_WORD" })
				}
				const foundWord = forbiddenWords.filter(word =>
					action.payload.title.includes(word)
				);

				if (foundWord.length) {
					return dispatch({ type: "FOUND_BAD_WORD" });
				}
			}
			return next(action);
		};
	};
}

