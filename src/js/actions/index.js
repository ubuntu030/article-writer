import { ADD_ARTICLE, SWITCH_MODE } from '../constants/action-types';

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload }
};

export function switchMode(payload) {
	return { type: SWITCH_MODE, payload }
};