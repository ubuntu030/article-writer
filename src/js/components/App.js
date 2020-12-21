import React from "react";
import TypingArea from "./TypingArea";
import SwitchModeBtn from "./SwitchModeBtn";
import ArticleDisplay from "./ArticleDisplay";

const App = () => (
	<div>
		<h2>Articles</h2>
		<TypingArea />
		<ArticleDisplay />
		<SwitchModeBtn />
	</div>
);

export default App;