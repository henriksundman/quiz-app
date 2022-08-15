type AnswersProps = {
	correctAnswer: string;
	incorrectAnswers: string[];
};

function shuffleArray(arr: string[]): void {
	arr.sort(() => Math.random() - 0.5);
}

const Answers = ({ correctAnswer, incorrectAnswers }: AnswersProps) => {
	let allAnswers = incorrectAnswers.concat(correctAnswer);

	shuffleArray(allAnswers);

	return (
		<form name="answers">
			{allAnswers.map((answer: string) => (
				<div key={answer}>
					<input type="radio" name="answers" id={answer} value={answer} />
					<label htmlFor={answer}>{answer}</label>
				</div>
			))}
		</form>
	);
};
export default Answers;
