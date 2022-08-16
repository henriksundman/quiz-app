import classes from './Answers.module.css';

interface AnswersProps {
	correctAnswer: string;
	incorrectAnswers: string[];
}

function shuffleArray(arr: string[]): void {
	arr.sort(() => Math.random() - 0.5);
}

const Answers = ({ correctAnswer, incorrectAnswers }: AnswersProps) => {
	let allAnswers = incorrectAnswers.concat(correctAnswer);

	shuffleArray(allAnswers);

	return (
		<>
			{allAnswers.map((answer: string) => (
				<div key={answer} className={classes.btn}>
					{answer}
				</div>
			))}
		</>
	);
};
export default Answers;
