import React from "react";
import TypingArea from "./TypingArea";
import SwitchModeBtn from "./SwitchModeBtn";
import ArticleDisplay from "./ArticleDisplay";
import ArticleList from './ArticleList';
import '../../css/flex.css';

const App = () => (
	<div className="flex-row">
		<div className="flex-colume flex-2">
			<h2>Articles</h2>
			<TypingArea />
			<ArticleDisplay />
		</div>
		<div className="flex-colume flex-1">
			<ArticleList />
			<SwitchModeBtn />
		</div>
	</div>
);

export default App;