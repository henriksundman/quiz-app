interface AnswersProps {
	correctAnswer: string;
	incorrectAnswers: string[];
}

function Answers({ correctAnswer, incorrectAnswers }: AnswersProps) {
	// function shuffleArray(arr: string[]): string[] {
	// 	return arr.sort(() => Math.random() - 0.5);
	// }
	// let allAnswers = incorrectAnswers.concat(correctAnswer);
	// console.log(allAnswers);
	// let shuffledAnswers = shuffleArray(allAnswers);
	// console.log(allAnswers);

	return <button>answers</button>;
}
export default Answers;
