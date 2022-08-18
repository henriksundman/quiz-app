import { Fragment, SyntheticEvent, useState } from 'react';

import classes from './Answers.module.css';

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
	console.log(chosenAnswer);
	const correctAnswerIndex = shuffledAnswers.indexOf(correctAnswer);
	const chosenAnswerIndex = shuffledAnswers.indexOf(chosenAnswer);

	console.log('chosen: ' + chosenAnswerIndex);

	return (
		<Fragment>
			{shuffledAnswers &&
				shuffledAnswers.map((answer: string, index: number) => {
					const isCorrectAnswer = index === correctAnswerIndex;
					const isTheClickedButton = index === chosenAnswerIndex;

					return (
						<button
							key={answer}
							className={`${classes.btn} ${
								isAnswered
									? isCorrectAnswer
										? classes.correct
										: classes.incorrect
									: ''
							} ${
								isAnswered ? (isTheClickedButton ? classes.clicked : '') : ''
							}  `}
							onClick={onClickAnswer}
						>
							{answer}
						</button>
					);
				})}
		</Fragment>
	);
};
