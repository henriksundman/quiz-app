import { useContext } from 'react';

import { GameContext } from '../../store/game-context';
import { Card } from '../ui/Card';

import classes from './ScoreBoard.module.css';

interface ScoreBoardProps {
	currentQuestionIndex: number;
}

export const ScoreBoard = ({ currentQuestionIndex }: ScoreBoardProps) => {
	const gameCtx = useContext(GameContext);

	const { numberOfQuestions, numberOfCorrectAnswers } = gameCtx;

	const numberIncorrectAnswers = currentQuestionIndex - numberOfCorrectAnswers;

	return (
		<Card>
			<div className={classes.container}>
				<div className={classes.checkmark}>✓{numberOfCorrectAnswers}</div>
				<div className="">
					{currentQuestionIndex + 1}/{numberOfQuestions}
				</div>
				<div className={classes['x-mark']}>❌{numberIncorrectAnswers}</div>
			</div>
		</Card>
	);
};
