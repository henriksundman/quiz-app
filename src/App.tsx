import './app.css';

import { Fragment, useContext } from 'react';

import { GameScreen } from './components/GameScreen/GameScreen';
import StartScreen from './components/StartScreen/StartScreen';
import { GameContext } from './store/game-context';
import { GameOverScreen } from './components/GameOverScreen/GameOverScreen';

const App = () => {
	const { isGameStarted, isGameOver } = useContext(GameContext);

	const gameNotStarted = !isGameStarted && !isGameOver;
	const gameIsStarted = isGameStarted && !isGameOver;
	const gameIsOver = isGameOver;

	return (
		<Fragment>
			{gameNotStarted && <StartScreen />}
			{gameIsStarted && <GameScreen />}
			{gameIsOver && <GameOverScreen />}
		</Fragment>
	);
};

export default App;
