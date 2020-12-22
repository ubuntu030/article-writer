import React from "react";
import SwitchModeBtn from "./SwitchModeBtn";
import ArticleDisplay from "./ArticleDisplay";
import ArticleList from './ArticleList';
import TextEditor from './TextEditor';
import '../../css/flex.css';

const App = () => (
	<div className="flex-row">
		<div className="flex-colume flex-2">
			<h2>Articles</h2>
			<TextEditor />
			<ArticleDisplay />
		</div>
		<div className="flex-colume flex-1">
			<ArticleList />
			<SwitchModeBtn />
		</div>
	</div>
);

export default App;