import { Fragment, SyntheticEvent, useState } from 'react';

import classes from './Answers.module.css';
import { Button } from '../ui/Button';

interface AnswersProps {
	correctAnswer: string;
	incorrectAnswers: string[];
	isAnswered: boolean;
	chosenAnswer: string;
	onClickAnswer: (event: SyntheticEvent) => void;
}

function shuffleArray(arr: string[]): string[] {
	return arr.slice(0, arr.length).sort(() => Math.random() - 0.5);
}

export const Answers = ({
	correctAnswer,
	incorrectAnswers,
	onClickAnswer,
	isAnswered,
	chosenAnswer,
}: AnswersProps) => {
	const [isShuffled, setIsShuffled] = useState(false);
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

	const allAnswers = incorrectAnswers.concat(correctAnswer);
	if (!isShuffled) {
		setShuffledAnswers(shuffleArray(allAnswers));
		setIsShuffled(true);
	}

	const correctAnswerIndex = shuffledAnswers.indexOf(correctAnswer);
	const chosenAnswerIndex = shuffledAnswers.indexOf(chosenAnswer);

	return (
		<Fragment>
			{shuffledAnswers &&
				shuffledAnswers.map((answer: string, index: number) => {
					const isCorrectAnswer = index === correctAnswerIndex;
					const isTheClickedButton = index === chosenAnswerIndex;

					let styles = '';
					if (isAnswered) {
						styles = isCorrectAnswer ? classes.correct : classes.incorrect;
						styles = isTheClickedButton
							? `${styles} ${classes.clicked}`
							: styles;
						styles = `${styles} ${classes.disabled}`;
					}

					return (
						<Button key={answer} customStyles={styles} onClick={onClickAnswer}>
							{answer}
						</Button>
					);
				})}
		</Fragment>
	);
};
