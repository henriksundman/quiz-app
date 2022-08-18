import './app.css';

import { Fragment, useContext } from 'react';

import QuestionAndAnswers from './components/GameScreen';
import Card from './components/ui/Card';

import { GameContext } from './store/game-context';
import StartScreen from './components/StartScreen';

const App = () => {
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
};

export default App;
