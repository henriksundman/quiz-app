import './app.css';

import { Fragment, useContext } from 'react';

import { GameScreen } from './components/GameScreen/GameScreen';
import StartScreen from './components/StartScreen/StartScreen';
import { GameContext } from './store/game-context';

const App = () => {
	const { isGameStarted } = useContext(GameContext);

	return (
		<Fragment>
			{!isGameStarted && <StartScreen />}
			{isGameStarted && <GameScreen />}
		</Fragment>
	);
};

export default App;
