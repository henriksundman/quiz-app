import { useContext } from 'react';

import { GameContext } from '../../store/game-context';
import { Card } from '../ui/Card';

import classes from './ScoreBoard.module.css';

interface ScoreBoardProps {
	currentQuestionIndex: number;
}

export const ScoreBoard = ({ currentQuestionIndex }: ScoreBoardProps) => {
	const gameCtx = useContext(GameContext);

	const {
		numberOfQuestions,
		numberOfCorrectAnswers,
		numberOfIncorrectAnswers,
	} = gameCtx;

	return (
		<Card>
			<>
				<div className={classes.container}>
					<p className={classes.checkmark}>✓{numberOfCorrectAnswers}</p>
					<p>
						{currentQuestionIndex + 1}/{numberOfQuestions}
					</p>
					<p className={classes.xmark}>❌{numberOfIncorrectAnswers}</p>
				</div>
			</>
		</Card>
	);
};
