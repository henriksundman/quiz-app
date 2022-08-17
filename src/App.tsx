import './app.css';

import React, { Fragment, useContext } from 'react';

import QuestionAndAnswers from './components/QuestionAndAnswers';
import Card from './components/ui/Card';

import { GameContext } from './store/game-context';
import StartScreen from './components/StartScreen';

function App() {
	const gameCtx = useContext(GameContext);

	console.log(gameCtx);

	return (
		<Fragment>
			<Card>
				{!gameCtx.isGameStarted && <StartScreen />}
				{gameCtx.isGameStarted && <QuestionAndAnswers />}
			</Card>
		</Fragment>
	);
}

export default App;
