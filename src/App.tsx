import './app.css';

import { Fragment, useContext } from 'react';

import { GameScreen } from './components/GameScreen';
import StartScreen from './components/StartScreen';
import { GameContext } from './store/game-context';

const App = () => {
	const gameCtx = useContext(GameContext);

	console.log(gameCtx);

	return (
		<Fragment>
			{!gameCtx.isGameStarted && <StartScreen />}
			{gameCtx.isGameStarted && <GameScreen />}
		</Fragment>
	);
};

export default App;
