import { Fragment, useContext } from 'react';

import { GameContext } from '../../store/game-context';
import { Card } from '../ui/Card';

export const GameOverScreen = () => {
	const { questions, numberOfCorrectAnswers, numberOfIncorrectAnswers } =
		useContext(GameContext);

	return (
		<Card>
			<h1>
				The Quiz is finished. You answered {numberOfCorrectAnswers} question/s
				correctly out of {questions.length} possible.
			</h1>
		</Card>
	);
};
