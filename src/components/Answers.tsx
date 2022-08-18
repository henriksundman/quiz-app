import { Fragment } from 'react';
import classes from './Answers.module.css';

interface AnswersProps {
	correctAnswer: string;
	incorrectAnswers: string[];
	onClickAnswer: () => void;
}

function shuffleArray(arr: string[]): void {
	arr.sort(() => Math.random() - 0.5);
}

export const Answers = ({
	correctAnswer,
	incorrectAnswers,
	onClickAnswer,
}: AnswersProps) => {
	let allAnswers = incorrectAnswers.concat(correctAnswer);
	shuffleArray(allAnswers);

	return (
		<Fragment>
			{allAnswers.map((answer: string) => (
				<div key={answer} className={classes.btn} onClick={onClickAnswer}>
					{answer}
				</div>
			))}
		</Fragment>
	);
};
