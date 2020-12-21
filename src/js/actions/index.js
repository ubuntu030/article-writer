import { ADD_ARTICLE, SWITCH_MODE, SELECTED_ID } from '../constants/action-types';

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload }
};

export function switchMode(payload) {
	return { type: SWITCH_MODE, payload }
};

export function selectedId(payload) {
	return { type: SELECTED_ID, payload }
};