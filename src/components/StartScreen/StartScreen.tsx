import { useContext, useState } from 'react';

import { GameContext } from '../../store/game-context';
import classes from './StartScreen.module.css';
import { Card } from '../ui/Card';

const StartScreen = () => {
	const gameCtx = useContext(GameContext);
	const [numQuestions, setNumQuestions] = useState(5);

	const start = (): void => {
		gameCtx.gameStartHandler(numQuestions);
	};

	return (
		<Card>
			<h1>Welcome to the Quiz!</h1>
			<p>Select number of questions (max 50)</p>
			<p className={classes.number}>{numQuestions}</p>
			<div className={classes.container}>
				<p
					className={classes.operator}
					onClick={() => setNumQuestions((prevVal) => Math.max(1, prevVal - 1))}
				>
					➖
				</p>
				<p
					className={classes.operator}
					onClick={() =>
						setNumQuestions((prevVal) => Math.min(50, prevVal + 1))
					}
				>
					➕
				</p>
			</div>
			<p>Press Start to begin</p>
			<button onClick={start}>Start</button>
		</Card>
	);
};
export default StartScreen;
